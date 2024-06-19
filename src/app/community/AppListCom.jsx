// eslint-disable-next-line no-unused-vars
import React from "react";
import PapCom1 from "./../../assets/assets/image/image3.png";
import PapCom2 from "./../../assets/assets/image/image2.jpg";
import { Link } from "react-router-dom";

const listCommunity = [
    {
        comKey: 1,
        comUsername: "jkt48forever",
        comImg: PapCom1,
        comTitle: "Komunitas Pecinta JKT48",
        comDesc: "Ini adalah Deskripsi Komunitas",
    },
    {
        comKey: 2,
        comUsername: "jkt482in",
        comImg: PapCom2,
        comTitle: "Komunitas Pecinta Michie",
        comDesc: "Ini adalah Deskripsi Komunitas LALALALALAKAKAK",
    },
];

// eslint-disable-next-line react/prop-types
function ListCom({ comuImg, comuTitle, comuDesc }) {
    return (
        <>
            <Link to={"/app/community/kariadi"}>
                <div className="flex gap-2 border border-stone-300 rounded-xl px-2 py-2 w-full hover:bg-stone-200 items-center">
                    {/* <div className="size-16 border border-stone-900"> */}
                    <div className="min-w-10 min-h-10 max-w-10 max-h-10">
                        <img
                            src={comuImg}
                            className="size-10 object-cover object-center rounded-xl"
                            alt=""
                        />
                    </div>
                    {/* </div> */}
                    {/* Berisi teks  */}
                    <div className="grid gap-1 w-full max-h-fit">
                        <h1 className="font-semibold text-sm text-stone-800">
                            {comuTitle}
                        </h1>
                        <p className="font-thin text-xs text-stone-500 truncate">
                            {comuDesc}
                        </p>
                    </div>
                    <Link>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg  text-xs w-16 text-center py-2">
                            Follow
                        </button>
                    </Link>
                </div>
            </Link>
        </>
    );
}

function AppListCom() {
    return (
        <>
            <div className="grid gap-2">
                <h1 className="font-semibold text-base text-stone-700">
                    List Komunitas
                </h1>
                <div className="grid gap-2">
                    {listCommunity.map((komunitas) => (
                        <ListCom
                            key={komunitas.comKey}
                            comuImg={komunitas.comImg}
                            comuTitle={komunitas.comTitle}
                            comuDesc={komunitas.comDesc}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default AppListCom;
