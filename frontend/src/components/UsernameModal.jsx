import { useState } from "react";

const UsernameModal = ({ onJoin }) => {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username.trim()) return;

        onJoin(username.trim());
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 w-96 shadow-lg">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Join Chat
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border w-full rounded-lg px-4 py-3 outline-none"
                    />

                    <button
                        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Join
                    </button>

                </form>

            </div>
        </div>
    );
};

export default UsernameModal;