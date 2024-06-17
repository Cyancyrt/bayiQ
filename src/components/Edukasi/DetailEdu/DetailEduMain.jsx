import { useParams } from "react-router-dom";
import { Badge } from "flowbite-react";
import Image1 from "../../../assets/assets/image/image1.jpg";
import { useEffect, useState } from "react";
import { GetOnePost } from "../../../middleware/dataSlice";

function DetailEduMain() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetchPosting = async () => {
    await GetOnePost(id)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPosting();
  }, []);
  const teks = [data?.isi];
  const parArray = teks[0]?.split(". ");
  const twoThirdsIndex = Math.floor((parArray?.length * 2) / 3);
  const paragrafPertama = parArray?.slice(0, twoThirdsIndex).join(". ");
  const paragrafKedua = parArray?.slice(twoThirdsIndex).join(". ");

  return (
    <>
      <div className="my-12 max-w-5xl mx-6 md:mx-auto">
        <div className="h-96 w-full relative bg-rose-50">
          <img
            src={Image1}
            className="h-96 object-cover max-w-4xl w-full mx-auto  relative rounded-3xl"
            alt=""
          />
        </div>
        <div className="self-stretch  px-6  p-6 flex-col justify-start items-start flex gap-3">
          {/* Badge */}
          <div className="flex flex-wrap gap-2 text-base">
            {data?.kategoris &&
              Object.keys(data.kategoris).map((key, index) => (
                <Badge
                  key={index}
                  className="bg-stone-100 border-stone-300 border text-stone-600"
                >
                  {data.kategoris[key]?.name}
                </Badge>
              ))}
          </div>
          <div className="grid gap-2">
            <div className="self-stretch text-stone-700 text-3xl font-bold leading-7">
              {data.title}
            </div>
            <br />
            <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
              {paragrafPertama}
            </div>
            <div className="self-stretch text-stone-500 text-base font-normal  leading-normal">
              {paragrafKedua}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailEduMain;
