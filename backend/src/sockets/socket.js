import { Server } from "socket.io";
import Message from "../models/Message.js";

let io;

// Store connected users
const onlineUsers = new Map();

export const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: process.env.CLIENT_URL, 
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        console.log(`User Connected: ${socket.id}`);

        // ==========================
        // Join Chat
        // ==========================
        socket.on("join-chat", (username) => {
            onlineUsers.set(socket.id, username);

            console.log(`${username} joined`);
            console.log("Current online users:", onlineUsers.size);

            io.emit("online-users", onlineUsers.size);
        });

        // ==========================
        // Send Message
        // ==========================
        socket.on("send-message", async (data) => {
            try {
                const newMessage = await Message.create({
                    username: data.username,
                    message: data.message,
                });

                io.emit("receive-message", newMessage);
            } catch (error) {
                console.error("Send Message Error:", error);
            }
        });

        // ==========================
        // Typing Indicator
        // ==========================
        socket.on("typing", (username) => {
            socket.broadcast.emit("user-typing", username);
        });

        socket.on("stop-typing", () => {
            socket.broadcast.emit("user-stop-typing");
        });

        // ==========================
        // Disconnect
        // ==========================
        socket.on("disconnect", () => {
            const username = onlineUsers.get(socket.id);

            if (username) {
                console.log(`${username} disconnected`);
            }

            onlineUsers.delete(socket.id);

            io.emit("online-users", onlineUsers.size);

            console.log(`User Disconnected: ${socket.id}`);
        });
    });
};