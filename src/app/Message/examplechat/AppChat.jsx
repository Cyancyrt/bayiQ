// import React from "react";

import AppBubbleChat from "./AppBubbleChat";

const spillChatnyaBg = [
    { id: 1, type: "me", message: "Hai bu Dokter!" },
    {
        id: 2,
        type: "other",
        message:
            "Always your number 1. till infinity and beyond. Hello Everyone, It's Michie!",
    },
    {
        id: 3,
        type: "other",
        message:
            "salam kenal ya, aku Michie, Dokter spesialis anak dan Kandungan dari RS. Kariadi. Ada yang bisa saya bantu?",
    },
    { id: 4, type: "me", message: "Jadi gini bu dokter" },
    { id: 5, type: "me", message: "Saya sedang terkena sebuah penyakit" },
    { id: 6, type: "other", message: "Penyakit apakah itu?" },
    {
        id: 7,
        type: "me",
        message: "Sakit ati bu Dokter, aku ditinggal nikah sama pacarku",
    },
    {
        id: 8,
        type: "me",
        message: "Padahal udah tak temani dari dia masih 0",
    },
    {
        id: 9,
        type: "me",
        message: "dia udah janji bakal setia, tapi nyatanya",
    },
    { id: 10, type: "me", message: "dia malah nikah sama orang lain :)" },
    {
        id: 11,
        type: "other",
        message: "Wah, aku turut bersedih atas kejadian itu,",
    },
    {
        id: 11,
        type: "other",
        message:
            " Namun. Ingatlah, waktu terus berjalan, hidup masih berlanjut",
    },
    {
        id: 11,
        type: "other",
        message:
            " Jangan sampai gara-gara satu orang, kamu menyia - nyiakan waktu dan hidupmu",
    },
    {
        id: 11,
        type: "other",
        message:
            "Padahal waktumu itu, bisa kamu gunakan untuk hal yang lebih penting. Benar tidak?",
    },
    {
        id: 11,
        type: "me",
        message:
            "Benar sih bu Dokter, tapi sakit buu... susah aku lupain dia..",
    },
    { id: 11, type: "me", message: "Aku ga bisa hidup tanpa dia" },
    { id: 11, type: "me", message: "Cuma dia yang aku cinta" },
    {
        id: 11,
        type: "other",
        message: "Eits,,, kata siapa? Ingat hey, kamu itu masih muda.",
    },
    { id: 11, type: "other", message: "Masih banyak potensi" },
    { id: 11, type: "me", message: "Iya sih bu Dokter,,," },
    {
        id: 11,
        type: "other",
        message:
            "Daripada kamu terus galau, kamu bisa kok justru memanfaatkannya menjadi pribadi yang lebih baik lagi, benar bukan?",
    },
    { id: 11, type: "me", message: "Iya sih bu Dokter,,," },
    { id: 11, type: "other", message: "Ingat, manusia itu datang dan pergi" },
    { id: 11, type: "other", message: "Tetapi waktu terus berjalan" },
    {
        id: 11,
        type: "other",
        message:
            "Belajarlah dari kesalahan, Renungkan. Apa hal yang menjadikan hubunganmu kandas. Renungkan, apakah dia memang se pantas itu untukmu?",
    },
    {
        id: 11,
        type: "other",
        message: "Belum nikah saja sudah begini, apalagi kalau sudah nikah?",
    },
    {
        id: 11,
        type: "me",
        message: "Benar sih bu Dokter. Aku akan mencoba move on",
    },
    { id: 11, type: "other", message: "Nah, gitu dong. Semangat kamu ya!" },
    {
        id: 11,
        type: "other",
        message: "Kamu itu berpotensi loh, bakat kamu luar biasa",
    },
    { id: 11, type: "me", message: "Hehe, makasi bu Dokter" },

    {
        id: 11,
        type: "other",
        message: "Kamu mending sekarang fokus ngembangin diri dulu ya!",
    },
    {
        id: 11,
        type: "other",
        message: "Kalau kamu sudah sukses, baru cari cewe lagi",
    },
    {
        id: 11,
        type: "other",
        message: "Dengan begitu kamu akan menghargai yang namanya perjuangan. ",
    },
    {
        id: 11,
        type: "other",
        message:
            "Karena di jaman sekarang, tidak semua orang paham arti perjuangan. ",
    },
    {
        id: 11,
        type: "me",
        message: "Makasih banyak bu Dokter, aku sekarang lebih lega lagi",
    },
    {
        id: 11,
        type: "me",
        message: "Aku akan coba move on dan jadi lebih baik lagi",
    },
    { id: 11, type: "other", message: "Gitu dong, bagus. " },
    { id: 11, type: "other", message: "Semangat ya!" },
    { id: 11, type: "me", message: "Makasih bu Dokter!" },
    { id: 11, type: "other", message: "Eh, Flora lagi showroom nih!" },
];

function AppChat() {
    return (
        <>
            <div className="text-center grid gap-2">
                <h3 className="text-sm font-thin text-stone-600">
                    21 Mei 2024, 21.00
                </h3>
                <div className="grid gap-1">
                    {spillChatnyaBg.map((chat) => (
                        <AppBubbleChat
                            key={chat.key}
                            type={chat.type}
                            message={chat.message}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default AppChat;
