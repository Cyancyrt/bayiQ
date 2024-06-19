// eslint-disable-next-line no-unused-vars
import React from "react";
import ImgnyaBG from "./../../../assets/assets/image/image1.jpg";
import AppChat from "./AppChat";
import ChatInput from "./ChatInput";

function AppMessageHeader() {
    return (
        <>
            <header className="fixed w-full flex h-20 gap-4 items-center border-b border-stone-200 py-4 px-6 bg-stone-100">
                <div className="flex gap-1 min-w-12 min-h-12 max-w-12 max-h-12">
                    <img
                        src={ImgnyaBG}
                        className="size-12 object-cover object-center rounded-full"
                        alt=""
                    />
                </div>
                <div className="grid gap-0.5">
                    <h1>Dr. Michelle Alexandra </h1>
                    <p className="text-xs font-thin text-stone-400">
                        Terakhir dilihat 09.00{" "}
                    </p>
                </div>
            </header>
        </>
    );
}

function AppMessageDoctor() {
    return (
        <>
            <div className="flex flex-col h-screen">
                {/* Header */}
                <div className=" w-full fixed top-0 z-10">
                    <AppMessageHeader />
                </div>

                {/* Chat Messages */}
                <div className=" bg-stone-50 pt-20 pb-24 overflow-auto">
                    <div className="mt-4">
                        <AppChat />
                    </div>
                </div>

                {/* Input Field */}
                <ChatInput />
            </div>
        </>
    );
}

export default AppMessageDoctor;
