import { useState, useEffect } from "react";

export const kategoriKonsul = {
  1: "kesehatan jiwa anak",
  2: "kesehatan jiwa orang tua",
  3: "kesehatan badan anak",
  4: "kesehatan badan ibu hamil",
};
const daysOfWeek = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

export const cekHari = (id) => {
  return daysOfWeek[id];
};
export const cekKategori = (id) => {
  return kategoriKonsul[id];
};

export const PassHandle = (e) => {
  function handleInputPass(e) {
    const password = e.target.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    const pesanBenar = "Kata sandi memenuhi kriteria";
    const pesanSalah =
      "Kata sandi harus mengandung huruf besar & kecil, minimal 8 karakter";
    if (hasUpperCase && hasLowerCase && password.length >= 8) {
      return { pesan: pesanBenar, warna: "green" };
    } else {
      return { pesan: pesanSalah, warna: "red" };
    }
  }
  return { handleInputPass };
};
