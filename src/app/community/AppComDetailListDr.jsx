// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AppComDetailListDr({ DocImg, DocName }) {
    return (
        <>
            <div>
                <Link to={"/app/doctor/"}>
                    <div className="flex gap-2 border border-stone-300 rounded-xl px-2 py-2 w-full hover:bg-stone-200 items-center">
                        {/* <div className="size-16 border border-stone-900"> */}
                        <div className="min-w-10 min-h-10 max-w-10 max-h-10">
                            <img
                                src={DocImg}
                                className="size-10 object-cover object-center rounded-xl"
                                alt=""
                            />
                        </div>
                        {/* </div> */}
                        {/* Berisi teks  */}
                        <div className="grid gap-1 w-full max-h-fit">
                            <h1 className="font-semibold text-sm text-stone-800">
                                {DocName}
                            </h1>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default AppComDetailListDr;
