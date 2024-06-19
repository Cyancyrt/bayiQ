// eslint-disable-next-line no-unused-vars
import React from "react";
import AppHeader1 from "../components/AppHeader1";

import Bg from "./../../assets/assets/image/pattern-1.png";
import Pap from "./../../assets/assets/image/image2.jpg";
import AppComDetailListDr from "./AppComDetailListDr";
import PapDr1 from "./../../assets/assets/image/image3.png";
import PapDr2 from "./../../assets/assets/image/image1.jpg";

// List Dokter dalam komunitas ini
const listDrInThisCom = [
    {
        drKey: 1,
        drUsername: "jkt48forever",
        drImg: PapDr1,
        drName: "dr. Michelle Alexandra",
    },
    {
        drKey: 2,
        drUsername: "jkt482in",
        drImg: PapDr2,
        drName: "dr. Azizi Shafa Asadel",
    },
];

// eslint-disable-next-line react/prop-types
function CTAButton({ status }) {
    if (status == false) {
        return (
            <>
                <button className="max-w-80 py-2 mx-auto w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg text-sm">
                    Bergabung
                </button>
            </>
        );
    } else if (status == true) {
        return (
            <>
                <div className="flex mx-4 gap-2">
                    <button className="max-w-80 py-2 mx-auto w-full border bg-white border-primary-300 hover:bg-primary-50 text-stone-700 font-semibold rounded-lg text-sm">
                        Batal Gabung
                    </button>
                    <button className="max-w-80 py-2 mx-auto w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg text-sm">
                        Masuk Chat
                    </button>
                </div>
            </>
        );
    }
}

function AppComDetailHead() {
    // Variabel dibawah berfungsi untuk menunjukkan status, apakah dia udh follow / belom
    let isFollow = true;
    return (
        <>
            <AppHeader1 pageTitle={"Penggemar JKT48"} />
            {/* Kepala Komunitas */}
            <header
                className="grid bg-primary-500 w-full h-40   bg-cover bg-center"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                {/* Profil */}
                <div
                    className="mx-auto mt-24 rounded-3xl border-4 border-stone-400 size-28 bg-cover bg-center "
                    style={{ backgroundImage: `url(${Pap})` }}
                ></div>
            </header>
            {/* Text dibawah Foto */}
            <div className="grid gap-1 text-center mt-12 mb-4 py-2 mx-auto">
                <div className="flex gap-2 mx-auto w-fit items-center">
                    <h1 className="text-2xl font-bold text-center  px-3">
                        Komunitas Penggemar JKT488 JKT48 JKT48
                    </h1>
                </div>
                {/* Tanggal bergabung */}
                <div className="flex gap-1 text-sm text-stone-600 mx-auto w-fit">
                    <p className="">Oleh </p>
                    <p className="">RS. Kariadi Semarang</p>
                </div>
                {/* Info jumlah Member */}
                <div className="flex gap-2 my-2 border border-stone-300 px-3 py-3 rounded-2xl w-fit mx-auto bg-white">
                    <div className=" w-20">
                        <h1 className="font-bold text-base">10k</h1>
                        <h3 className="font-thin text-sm">Pengikut</h3>
                    </div>
                    <div className=" w-20">
                        <h1 className="font-bold text-base">19</h1>
                        <h3 className="font-thin text-sm">Dokter</h3>
                    </div>
                    <div className=" w-20">
                        <h1 className="font-bold text-base">204</h1>
                        <h3 className="font-thin text-sm">Feeds</h3>
                    </div>
                </div>

                {/* CTA Join */}
                <div>
                    <CTAButton status={isFollow} />
                </div>
            </div>
        </>
    );
}

function AppComDetail() {
    return (
        <>
            <div>
                <AppComDetailHead />

                <div className="grid gap-4">
                    <div className="mx-4 h-fit">
                        <h1 className="font-bold text-base text-stone-700">
                            Detail
                        </h1>
                        <p className="font-thin text-sm text-stone-500 h-fit">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Veritatis, neque? Fuga exercitationem soluta
                            aut a incidunt rerum beatae pariatur, commodi ea ex
                            atque provident enim in consectetur, aliquam
                            deleniti odit debitis nesciunt, eos perspiciatis
                            illo excepturi voluptatem illum? Perspiciatis,
                            numquam. Quia sequi repellat nam repellendus minus
                            fuga iusto consectetur expedita?
                        </p>
                    </div>
                    <div className="grid gap-2 mx-4 h-fit">
                        <h1 className="font-bold text-base text-stone-700">
                            List Dokter
                        </h1>
                        <div className="grid gap-2">
                            {listDrInThisCom.map((dokter) => (
                                <AppComDetailListDr
                                    key={dokter.drKey}
                                    DocName={dokter.drName}
                                    DocImg={dokter.drImg}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppComDetail;
