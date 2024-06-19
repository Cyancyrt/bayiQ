// import React from "react";
import { Outlet } from "react-router-dom";
// import Michie from "../assets/assets/image/pattern-1.png";
import AppSidebar from "../app/components/AppSidebar";

function AppLayoutD() {
    return (
        <>
            <div className="flex w-screen bg-green-100 justify-start">
                <div>
                    <AppSidebar />
                </div>
                <div className="bg-stone-200 w-full overflow-y-scroll h-screen">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AppLayoutD;
