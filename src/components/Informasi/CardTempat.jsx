import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
import Image1 from "../../assets/assets/image/image1.jpg";
import * as pkg from "react-icons/fa";

// import Image from "next/image";

function CardTempat({ id, name, lokasi, rating }) {
  const { FaStar } = pkg;
  return (
    <>
      <Link to={`/detailtempat/${id}`}>
        <div className="w-72 rounded-3xl border border-stone-300 flex-col justify-start items-start inline-flex bg-stone-50">
          <div className="h-48 w-full relative bg-rose-50">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-48 object-cover w-full  relative rounded-t-3xl"
              alt=""
            />
          </div>
          <div className="self-stretch  px-6 pt-3 pb-6 flex-col justify-start items-start flex gap-3">
            <div className="grid gap-2">
              <div className="grid gap-1">
                <h1 className="text-xl font-semibold text-stone-800">{name}</h1>
                <p className="text-sm text-stone-500">{lokasi}</p>
                <div className=" flex gap-2 items-center">
                  <FaStar className="text-yellow-400" />
                  <p className="text-sm font-semibold text-stone-700">
                    {rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardTempat;
