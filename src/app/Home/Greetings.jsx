// eslint-disable-next-line no-unused-vars
import React from "react";

function Greetings({ nama }) {
  return (
    <>
      <div className="grid gap-1">
        <h1 className="text-stone-600 font-light text-md">Selamat Datang,</h1>
        <h1 className="text-stone-700 font-bold text-2xl">{nama}</h1>
      </div>
    </>
  );
}

export default Greetings;
