// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { Home, Message, People, Profile } from "iconsax-react";

function AppFooter() {
    return (
        <>
            <div className="grid grid-flow-col w-full justify-between">
                <Link
                    to={"/app/"}
                    className="grid gap-1 self-center w-16 text-center text-stone-700 hover:text-stone-900"
                >
                    <Home
                        size="28"
                        variant="Bulk"
                        className="text-primary-500 hover:text-primary-800 mx-auto"
                    />
                    <p className="text-xs ">Beranda</p>
                </Link>
                <Link
                    to={"/app/community"}
                    className="grid gap-1 self-center w-16 text-center text-stone-700 hover:text-stone-900"
                >
                    <People
                        size="28"
                        variant="Bulk"
                        className="text-primary-500 hover:text-primary-800 mx-auto"
                    />
                    <p className="text-xs ">Komunitas</p>
                </Link>
                <Link
                    to={"/app/"}
                    className="grid gap-1 self-center w-16 text-center text-stone-700 hover:text-stone-900"
                >
                    <Message
                        size="28"
                        variant="Bulk"
                        className="text-primary-500 hover:text-primary-800 mx-auto"
                    />
                    <p className="text-xs ">Pesan</p>
                </Link>
                <Link
                    to={"/app/"}
                    className="grid gap-1 self-center w-16 text-center text-stone-700 hover:text-stone-900"
                >
                    <Profile
                        size="28"
                        variant="Bulk"
                        className="text-primary-500 hover:text-primary-800 mx-auto"
                    />
                    <p className="text-xs ">Profil</p>
                </Link>
            </div>
        </>
    );
}

export default AppFooter;