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
        comDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit rem qui.",
    },
    {
        comKey: 2,
        comUsername: "jkt482in",
        comImg: PapCom2,
        comTitle: "Komunitas Pecinta Michie",
        comDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit rem qui.",
    },
];

// eslint-disable-next-line react/prop-types
function ListCom({ comuImg, comuTitle, comuDesc }) {
    return (
        <>
            <Link to={"/app/community"}>
                <div className="grid grid-flow-col gap-2 border border-stone-300 rounded-xl px-2 py-1 w-full hover:bg-stone-200">
                    {/* <div className="size-16 border border-stone-900"> */}
                    <img
                        src={comuImg}
                        className="size-16 object-cover object-center rounded-2xl"
                        alt=""
                    />
                    {/* </div> */}
                    {/* Berisi teks  */}
                    <div>
                        <h1 className="font-semibold text-sm text-stone-800">
                            {comuTitle}
                        </h1>
                        <p className="font-thin text-xs text-stone-500">
                            {comuDesc}
                        </p>
                    </div>
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
