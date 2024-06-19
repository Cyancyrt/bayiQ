// import React from "react";
// import Logo from "./../assets/assets/logo.png";
// import { Link } from "react-router-dom";
// import { Notification } from "iconsax-react";

import AppListCom from "./community/AppListCom";
import AppHeader1 from "./components/AppHeader1";

function AppCommunity() {
    return (
        <>
            <AppHeader1 pageTitle={"Komunitas"} />
            <div className="grid gap-4 p-4">
                {/* Cari Komunitas */}
                <div className="grid gap-1">
                    {/* Search untuk komunitas */}
                    <form action="">
                        <div className="flex  justify-between gap-2 w-full ">
                            <input
                                type="text"
                                name=""
                                id=""
                                className="rounded-lg bg-stone-50 border border-stone-400 w-full active:border-primary-400 focus:border-primary-400"
                                placeholder="Cari komunitas disini"
                            />
                            <button
                                type="submit"
                                className="bg-primary-500 hover:bg-primary-600 px-4 text-white font-semibold rounded-lg"
                            >
                                <p className="text-sm">Cari</p>
                            </button>
                        </div>
                    </form>
                </div>
                {/* Cari Komunitas */}
                <AppListCom />
            </div>
        </>
    );
}

export default AppCommunity;
