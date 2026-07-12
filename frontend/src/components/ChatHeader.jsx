import { FiLogOut } from "react-icons/fi";

const ChatHeader = ({
    username,
    onLeave,
    onlineUsers,
    typingUser,
}) => {
    const avatarLetter = username?.charAt(0).toUpperCase() || "?";

    return (
        <header className="border-b bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Pulse Chat
                    </h1>

                    <p className="text-sm text-gray-500">
                        Stay connected in real time
                    </p>
                </div>

                <div className="flex items-center gap-3">

                    <button
                        onClick={onLeave}
                        className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                    >
                        <FiLogOut />
                        Leave
                    </button>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                        {avatarLetter}
                    </div>

                </div>
            </div>

            <div className="mt-3 flex items-center justify-between">

                <div className="h-5">
                    {typingUser && (
                        <p className="text-sm italic text-blue-600 animate-pulse">
                            {typingUser} is typing...
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-2 text-sm font-medium">
                    <span
                        className={`h-2.5 w-2.5 rounded-full ${onlineUsers > 0
                                ? "bg-green-500"
                                : "bg-gray-400"
                            }`}
                    />

                    <span className="text-gray-700">
                        {onlineUsers} Online
                    </span>
                </div>

            </div>
        </header>
    );
};

export default ChatHeader;