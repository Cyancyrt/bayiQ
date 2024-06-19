// eslint-disable-next-line no-unused-vars
import React from "react";

function AppProfileInfo({ data }) {
  console.log(data);
  return (
    <>
      <div className="grid gap-1">
        <div className="flex justify-between text-stone-600 text-sm border-b border-stone-300 px-2 py-2">
          <p className=" grid-cols-1">username </p>
          <p className=" font-semibold">{data?.username}</p>
        </div>
        <div className="flex justify-between text-stone-600 text-sm border-b border-stone-300 px-2 py-2">
          <p className=" grid-cols-1">nomor telepon </p>
          <p className=" font-semibold">{data?.nomor_telepon}</p>
        </div>
        <div className="flex justify-between text-stone-600 text-sm border-b border-stone-300 px-2 py-2">
          <p className=" grid-cols-1">email </p>
          <p className=" font-semibold">{data?.email}</p>
        </div>
      </div>
    </>
  );
}

export default AppProfileInfo;
