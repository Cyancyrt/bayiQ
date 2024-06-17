import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
import Image1 from "../../assets/assets/image/image1.jpg";
// import Image from "next/image";

function CardArtEdu({ data }) {
  return (
    <>
      <Link to={`/article/${data.slug}`}>
        <div className="w-full lg:w-96 rounded-3xl border border-stone-300 flex-col justify-start items-start inline-flex bg-stone-50">
          <div className="h-48 w-full relative bg-rose-50">
            <img
              src={Image1}
              className="h-48 object-cover w-full  relative rounded-t-3xl"
              alt=""
            />
          </div>
          <div className="self-stretch  px-6 pt-3 pb-6 flex-col justify-start items-start flex gap-3">
            {/* Badge */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(data.kategoris).map((key, index) => (
                <Badge
                  key={index}
                  className="bg-stone-100 border-stone-300 border text-stone-600"
                >
                  {data.kategoris[key]?.name}
                </Badge>
              ))}
            </div>
            <div className="grid gap-2">
              <div className="self-stretch text-stone-700 text-xl font-bold leading-7">
                {data.title}
              </div>
              <div className="self-stretch text-stone-400 text-base font-normal  leading-normal">
                {data.excerpt}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardArtEdu;
