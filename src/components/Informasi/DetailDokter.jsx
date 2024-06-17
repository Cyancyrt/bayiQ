import { Link, useParams } from "react-router-dom";
import Image1 from "../../assets/assets/image/dokterCewe1.jpg";
import * as pkg from "react-icons/fa";
import * as pkgmd from "react-icons/md";
import { GetOneDokter } from "../../middleware/dataSlice";
import { useEffect, useState } from "react";
import MapLeaf from "../../assets/map/mapLeaf";

function DetailDokter() {
  const { id } = useParams();
  const { FaStar } = pkg;
  const { MdWorkHistory } = pkgmd;
  const [data, setData] = useState([]);

  const fetch = async () => {
    await GetOneDokter(id).then((res) => setData(res));
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="grid md:flex gap-4 w-full justify-center items-start  p-6 bg-stone-50">
        <div className="h-72 w-full md:w-64 relative bg-rose-50">
          <img
            src={Image1}
            className="h-72 object-cover w-full  relative rounded-t-3xl"
            alt=""
          />
        </div>
        <div className="self-stretch pt-3 pb-6 flex-col justify-start items-start flex gap-3">
          <div className="grid gap-3">
            <div className="grid gap-2">
              <h1 className="text-xl font-semibold text-stone-800">
                {data.name}
              </h1>
              <p className="text-sm text-stone-500">{data.roles}</p>
              <div className="flex gap-4">
                <div className=" flex gap-2 items-center">
                  <FaStar className="text-yellow-400" />
                  <p className="text-sm font-semibold text-stone-700">
                    {data.rating}
                  </p>
                </div>
                <div className=" flex gap-2 items-center">
                  <MdWorkHistory />
                  <p className="text-sm font-semibold text-stone-700">
                    {data.pengalaman} tahun
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-2 text-base text-stone-700">
              <p>pengalaman : {data.deskripsi}</p>{" "}
              <p className="font-bold text-stone-900">
                Jenis Konsultasi {data.kategori}
              </p>
              <div className=" flex gap-2 items-center">
                <MapLeaf
                  location={data && data.lokasi && data?.lokasi.split(",")[1]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailDokter;
