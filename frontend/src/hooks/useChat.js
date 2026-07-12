import { useEffect, useRef, useState } from "react";
import { getMessages } from "../api/chat.api";
import socket from "../services/socket";

const useChat = () => {
    const [username, setUsername] = useState(
        localStorage.getItem("username") || ""
    );
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [typingUser, setTypingUser] = useState("");
    const typingTimeoutRef = useRef(null);
    const isTypingRef = useRef(false);

    const fetchMessages = async () => {
        try {
            const data = await getMessages();
            setMessages(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    const joinChat = (name) => {
        localStorage.setItem("username", name);

        setUsername(name);

        if (!socket.connected) {
            socket.connect();

            socket.on("connect", () => {
                socket.emit("join-chat", name);
            });
        } else {
            socket.emit("join-chat", name);
        }
    };

    const logout = () => {
        clearTimeout(typingTimeoutRef.current);

        isTypingRef.current = false;

        localStorage.removeItem("username");

        socket.disconnect();

        setUsername("");
        setMessages([]);
        setOnlineUsers(0);
        setTypingUser("");
    };

    const sendMessage = (message) => {
        if (!message.trim()) return;

        socket.emit("send-message", {
            username,
            message,
        });
    };

    const handleTyping = () => {
        if (!socket.connected || !username) return;

        if (!isTypingRef.current) {
            socket.emit("typing", username);
            isTypingRef.current = true;
        }

        clearTimeout(typingTimeoutRef.current);

        typingTimeoutRef.current = setTimeout(() => {
            socket.emit("stop-typing");

            isTypingRef.current = false;
        }, 1000);
    };

    useEffect(() => {
        socket.on("user-typing", (username) => {
            setTypingUser(username);
        });

        socket.on("user-stop-typing", () => {
            setTypingUser("");
        });

        return () => {
            socket.off("user-typing");
            socket.off("user-stop-typing");
        };
    }, []);

    useEffect(() => {
        socket.on("receive-message", (newMessage) => {
            setMessages((prev) => [...prev, newMessage]);
        });

        return () => {
            socket.off("receive-message");
        };
    }, []);

    useEffect(() => {
        if (username && !socket.connected) {
            socket.connect();
        }
    }, [username]);

    useEffect(() => {
        if (username) {
            fetchMessages();
        }
    }, [username]);

    useEffect(() => {
        socket.on("online-users", (count) => {
            setOnlineUsers(count);
        });

        return () => {
            socket.off("online-users");
        };
    }, []);

    useEffect(() => {
        return () => {
            clearTimeout(typingTimeoutRef.current);
        };
    }, []);

    return {
        loading,
        username,
        messages,
        joinChat,
        logout,
        sendMessage,
        onlineUsers,
        typingUser,
        handleTyping
    };
};

export default useChat;