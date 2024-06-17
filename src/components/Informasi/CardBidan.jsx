import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
import Image1 from "../../assets/assets/image/dokterCewe1.jpg";
import * as pkg from "react-icons/fa";
import * as pkgmd from "react-icons/md";

// import Image from "next/image";

function CardBidan({ name, rating, roles, lokasi, id, lamaKerja }) {
  const lok = lokasi.split(",")[0];
  const { MdWorkHistory } = pkgmd;
  const { FaStar } = pkg;
  return (
    <>
      <Link to={`/detailbidan/${id}`}>
        <div className="w-72 rounded-3xl border border-stone-300 flex-col justify-start items-start inline-flex bg-stone-50">
          <div className="h-48 w-full relative bg-rose-50">
            <img
              src={Image1}
              className="h-48 object-cover w-full  relative rounded-t-3xl"
              alt=""
            />
          </div>
          <div className="self-stretch  px-6 pt-3 pb-6 flex-col justify-start items-start flex gap-3">
            <div className="grid gap-3">
              <div className="grid gap-1">
                <h1 className="text-xl font-semibold text-stone-800">{name}</h1>
                <p className="text-sm text-stone-500">
                  Bidan {roles} di {lok}
                </p>
                <div className="flex gap-4">
                  <div className=" flex gap-2 items-center">
                    <FaStar className="text-yellow-400" />
                    <p className="text-sm font-semibold text-stone-700">
                      {rating}
                    </p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <MdWorkHistory />
                    <p className="text-sm font-semibold text-stone-700">
                      {lamaKerja} tahun
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardBidan;
