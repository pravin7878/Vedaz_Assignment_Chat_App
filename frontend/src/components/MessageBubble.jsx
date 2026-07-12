const MessageBubble = ({ message, currentUser }) => {
    const isOwnMessage = message.username === currentUser;

    return (
        <div
            className={`flex ${isOwnMessage ? "justify-end" : "justify-start"
                }`}
        >
            <div
                className={`max-w-xs rounded-xl p-3 ${isOwnMessage
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
            >
                <p className="text-sm font-semibold">
                    {message.username}
                </p>

                <p>{message.message}</p>

                <p className="text-xs mt-2 opacity-70">
                    {new Date(message.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>
            </div>
        </div>
    );
};

export default MessageBubble;