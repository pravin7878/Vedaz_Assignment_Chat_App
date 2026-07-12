import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

const ChatWindow = ({ messages, currentUser }) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg) => (
                <MessageBubble
                    key={msg._id}
                    message={msg}
                    currentUser={currentUser}
                />
            ))}

            <div ref={bottomRef} />
        </div>
    );
};

export default ChatWindow;