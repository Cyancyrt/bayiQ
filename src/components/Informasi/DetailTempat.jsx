import { useParams } from "react-router-dom";
import * as pkg from "react-icons/fa";
import * as pkgmd from "react-icons/md";
import { useEffect, useState } from "react";
import { GetOneRs } from "../../middleware/dataSlice";

function DetailTempat() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { FaStar } = pkg;
  const { MdWorkHistory } = pkgmd;
  const fetch = async () => {
    await GetOneRs(id).then((res) => setData(res));
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="grid md:flex gap-4 w-full justify-center items-start  p-6 bg-stone-50">
        <div className="h-72 w-full md:w-64 relative bg-rose-50">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <p className="text-sm text-stone-500">{data.lokasi}</p>
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
                    16 Tahun
                  </p>
                </div>
              </div>
            </div>
            <div className="grid my-2 gap-2 max-w-96 text-base text-stone-700">
              <p className="text-xl font-bold">Tentang</p>{" "}
              <p className=" text-stone-600">{data.deskripsi}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailTempat;
