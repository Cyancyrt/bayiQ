// eslint-disable-next-line no-unused-vars
import React from "react";
import comuImg from "./../../assets/assets/image/image1.jpg";
import comuImg2 from "./../../assets/assets/image/image3.png";
import { Link } from "react-router-dom";

const isiChatnya = [
    {
        chatKey: 1,
        chatUsername: "kariadi",
        chatType: "community",
        chatImg: comuImg2,
        chatName: "Komunitas RS. Kariadi Bg",
        chatLastFrom: "anda",
        chatLastChat: "Eh Flora lagi showroom nih",
        chatLastTime: "20.00",
        chatIsRead: true,
        chatCountUnread: 0,
    },
    {
        chatKey: 2,
        chatUsername: "michie",
        chatType: "personal",
        chatImg: comuImg,
        chatName: "Dr. Michelle Alexandra",
        chatLastFrom: "",
        chatLastChat: "Eh Flora lagi showroom nih",
        chatLastTime: "20.00",
        chatIsRead: false,
        chatCountUnread: 2,
    },
];

function AppChatList({
    // eslint-disable-next-line react/prop-types
    chatType,
    // eslint-disable-next-line react/prop-types
    chatUsername,
    // eslint-disable-next-line react/prop-types
    chatImg,
    // eslint-disable-next-line react/prop-types
    chatName,
    // eslint-disable-next-line react/prop-types
    chatLastFrom,
    // eslint-disable-next-line react/prop-types
    chatLastChat,
    // eslint-disable-next-line react/prop-types
    chatLastTime,
    // eslint-disable-next-line react/prop-types
    chatIsRead,
    // eslint-disable-next-line react/prop-types
    chatCountUnread,
}) {
    const imgClass = chatType === "community" ? "rounded-lg" : "rounded-full";
    const isreadbg = chatIsRead ? "font-thin" : "font-bold";

    return (
        <Link to={`/app/message/${chatUsername}`}>
            <div
                className={`flex gap-2 border-b border-stone-300 px-4 py-3 w-full hover:bg-stone-200 items-center ${isreadbg}`}
            >
                <div className="min-w-10 min-h-10 max-w-10 max-h-10">
                    <img
                        src={chatImg}
                        className={`size-10 object-cover object-center ${imgClass}`}
                        alt=""
                    />
                </div>
                <div className="grid gap-1 w-full max-h-fit">
                    <h1 className="font-semibold text-sm text-stone-800">
                        {chatName}
                    </h1>
                    <p className="text-xs text-stone-500 truncate">
                        {chatLastFrom} : {chatLastChat}
                    </p>
                </div>
                {chatCountUnread > 0 && (
                    <div className="grid w-8 h-6 m-0 p-0 rounded-full text-center items-center bg-primary-500">
                        <p className="font-bold h-fit w-fit m-auto text-xs text-white">
                            {chatCountUnread}
                        </p>
                    </div>
                )}
                <div>
                    <p className="text-xs text-stone-500">{chatLastTime}</p>
                </div>
            </div>
        </Link>
    );
}

function AppMessageList() {
    return (
        <div>
            {isiChatnya.map((spillchat) => (
                <AppChatList
                    key={spillchat.chatKey}
                    chatType={spillchat.chatType}
                    chatImg={spillchat.chatImg}
                    chatName={spillchat.chatName}
                    chatLastFrom={spillchat.chatLastFrom}
                    chatLastChat={spillchat.chatLastChat}
                    chatLastTime={spillchat.chatLastTime}
                    chatIsRead={spillchat.chatIsRead}
                    chatCountUnread={spillchat.chatCountUnread}
                    chatUsername={spillchat.chatUsername}
                />
            ))}
        </div>
    );
}

export default AppMessageList;
