// eslint-disable-next-line no-unused-vars
import React from "react";
import AppHeader1 from "./components/AppHeader1";
import AppMessageList from "./Message/AppMessageList";
import { Outlet } from "react-router-dom";

function AppMessage() {
    return (
        <>
            <div className="flex">
                <div className="relative bg-white max-w-96 w-full overflow-y-scroll h-screen border-r">
                    <div className="fixed h-20 max-w-screen bg-white pt-4 border-b border-stone-300">
                        <AppHeader1 pageTitle={"Pesan"} />
                    </div>
                    <div className="bg-white mt-20">
                        <AppMessageList />
                    </div>
                </div>
                <div className="flex w-full overflow-y-scroll h-screen bg-primary-50">
                    <div className="bg-primary-50 w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppMessage;
