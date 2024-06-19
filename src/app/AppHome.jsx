// import React from "react";
import Logo from "./../assets/assets/logo.png";
import { Link } from "react-router-dom";
import { Notification } from "iconsax-react";
import Greetings from "./Home/Greetings";
import AppMenu from "./Home/AppMenu";
import { useOutletContext } from "react-router-dom";

function AppHome() {
  const data = useOutletContext();
  console.log(data);
  return (
    <>
      <div className="grid gap-4  p-4">
        <header className="grid grid-flow-col justify-between items-center">
          <img src={Logo} className="w-24" alt="" />
          <Link to={"/app/notification"}>
            <Notification
              size="32"
              variant="Bulk"
              className="text-primary-400 hover:text-primary-700"
            />
          </Link>
        </header>
        {/* Greetings */}
        <Greetings nama={data?.username} />
        {/* Menu */}
        <AppMenu />
        {/* Menu */}
      </div>
    </>
  );
}

export default AppHome;
