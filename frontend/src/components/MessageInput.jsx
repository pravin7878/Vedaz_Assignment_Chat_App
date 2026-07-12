import { useState } from "react";

const MessageInput = ({ onSend, onTyping }) => {
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value);

        onTyping?.();
    };

    const handleSend = () => {
        const trimmedMessage = message.trim();

        if (!trimmedMessage) return;

        onSend(trimmedMessage);

        setMessage("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            handleSend();
        }
    };

    return (
        <div className="border-t p-4 flex gap-3">
            <input
                type="text"
                value={message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700 transition"
            >
                Send
            </button>
        </div>
    );
};

export default MessageInput;