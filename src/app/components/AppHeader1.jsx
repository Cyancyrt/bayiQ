// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "iconsax-react";

function BackButton() {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(-1)} className="px-4 py-2 ">
                <ArrowLeft size="24" className="text-neutral-400" />
            </button>
        </>
    );
}

// eslint-disable-next-line react/prop-types
function AppHeader1({ pageTitle }) {
    return (
        <>
            <header className="flex items-center border-b py-2 border-b-stone-300">
                <BackButton />
                {/* Tombol kembali */}
                <h1>{pageTitle}</h1>
            </header>
            <div></div>
        </>
    );
}

export default AppHeader1;
