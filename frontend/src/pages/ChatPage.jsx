import UsernameModal from "../components/UsernameModal";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

import useChat from "../hooks/useChat";
import ChatHeader from "../components/ChatHeader";

const ChatPage = () => {
    const {
        loading,
        username,
        messages,
        joinChat,
        logout,
        sendMessage,
        onlineUsers,
        typingUser,
        handleTyping
    } = useChat();

    return (
        <>
            {!username && (
                <UsernameModal onJoin={joinChat} />
            )}

            <div className="h-screen bg-gray-100 flex justify-center items-center">

                <div className="w-full max-w-3xl h-[90vh] bg-white rounded-xl shadow-lg flex flex-col">

                    <ChatHeader
                        username={username}
                        onLeave={logout}
                        onlineUsers={onlineUsers}
                        typingUser={typingUser}
                    />

                    {loading ? (
                        <div className="flex-1 flex items-center justify-center">
                            Loading messages...
                        </div>
                    ) : (
                        <ChatWindow
                            messages={messages}
                            currentUser={username}
                        />
                    )}
                    <MessageInput
                        onSend={sendMessage}
                        onTyping={handleTyping}
                    />
                </div>

            </div>
        </>
    );
};

export default ChatPage;