// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function ChatInput({ onSendMessage }) {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
        }
    };

    return (
        <>
            <div className=" w-full mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full  bg-green-500 items-center gap-4 py-4 px-6 border-t border-stone-200 border"
                >
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full h-10 px-4 border focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
                    />
                    <button
                        type="submit"
                        className="max-w-24 h-12 px-6 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                        Send
                    </button>
                </form>
            </div>
        </>
    );
}

export default ChatInput;
