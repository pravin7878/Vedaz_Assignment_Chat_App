import Message from "../models/Message.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const sendMessage = asyncHandler(async (req, res) => {
    const { username, message } = req.body ?? {};

    if (!username || !message) {
        throw new ApiError(400, "Username and message are required");
    }

    const newMessage = await Message.create({
        username,
        message,
    });

    res.status(201).json({
        success: true,
        data: newMessage,
    });
});

export const getMessages = asyncHandler(async (req, res) => {
    const messages = await Message.find().sort({
        createdAt: 1,
    });

    res.status(200).json({
        success: true,
        data: messages,
    });
});