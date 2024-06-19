// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function AppBubbleChat({ type, message }) {
    if (type == "other") {
        return (
            <>
                <div className="grid">
                    <div className="max-w-sm w-fit border mx-4 px-4 py-2 text-stone-600 text-left text-sm rounded-t-xl rounded-r-xl bg-primary-300">
                        {message}
                    </div>
                </div>
            </>
        );
    } else if (type == "me") {
        return (
            <>
                <div className="grid ">
                    <div className="justify-self-end max-w-sm mx-4 px-4 py-2 text-stone-600 text-left text-sm rounded-t-xl rounded-l-xl border border-stone-400">
                        {message}
                    </div>
                </div>
            </>
        );
    }
}

export default AppBubbleChat;
