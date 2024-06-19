import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Edit2 } from "iconsax-react";
import Bg from "./../assets/assets/image/pattern-1.png";
import AppProfileInfo from "./Profile/AppProfileInfo";

function AppProfile() {
  const data = useOutletContext();
  return (
    <>
      {/* Profile Section */}
      <div
        className="relative w-full h-36 bg-primary-500 bg-cover bg-center"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <img
          src={data?.image}
          alt="Profile"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-stone-400 w-40 h-40 object-cover"
        />
      </div>
      {/* Text Below Photo */}
      <div className="grid gap-1 text-center mt-20 mb-4 py-2 mx-auto">
        <div className="flex gap-2 mx-auto w-fit items-center max-w-full">
          <h1 className="text-2xl font-bold text-center truncate max-w-xs">
            {data?.username}
          </h1>
          <Link to={"/app/profile/edit/"}>
            <Edit2 size="24" className="text-stone-400" variant="Outline" />
          </Link>
        </div>
        {/* Join Date */}
        <div className="flex gap-1 text-sm text-stone-600 mx-auto w-fit">
          <p>Bergabung sejak</p>
          <p>27 Mei 2023</p>
        </div>
      </div>
      <hr className="border-2 border-stone-200" />
      <AppProfileInfo data={data} />
    </>
  );
}

export default AppProfile;
