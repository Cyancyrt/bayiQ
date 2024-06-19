// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Menu1 from "./../../assets/assets/image/Home2.png";

// eslint-disable-next-line react/prop-types
function TheMenu({ Logos, Text }) {
    return (
        <div className=" w-24 h-36 text-center flex items-center justify-center">
            <Link to="#">
                <div className="grid gap-1 justify-center">
                    <div className="mx-auto flex bg-primary-200 border border-primary-300 hover:border-primary-400 hover:bg-primary-300 w-20 h-20 rounded-2xl">
                        <img
                            src={Logos}
                            alt="Menu icon"
                            className="w-12 h-12 m-auto"
                        />
                    </div>
                    <p className="text-sm">{Text}</p>
                </div>
            </Link>
        </div>
    );
}

function AppMenu() {
    return (
        <div className="grid gap-1">
            <h1 className="font-semibold text-base text-stone-700">Menu</h1>
            <div className="grid grid-cols-3">
                <TheMenu Logos={Menu1} Text="Perawatan Bayi" />
                <TheMenu Logos={Menu1} Text="Perawatan Bayi" />
                <TheMenu Logos={Menu1} Text="Perawatan Bayi" />
                <TheMenu Logos={Menu1} Text="Perawatan Bayi" />
                <TheMenu Logos={Menu1} Text="Perawatan Bayi" />
                {/* Tambahkan item menu lainnya di sini */}
            </div>
        </div>
    );
}

export default AppMenu;
