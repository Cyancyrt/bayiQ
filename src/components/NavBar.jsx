import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/assets/logo.png";
import { useUserContext } from "../middleware/LoginSlice";
import LogOut from "../middleware/Logout";

function NavBar() {
  const { states, dispatch } = useUserContext();
  const handleLogout = async () => {
    await LogOut();
    dispatch({ type: "LOGOUT" });
  };
  return (
    <Navbar fluid rounded className="bg-primary-50 h-fit lg:px-20">
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex gap-4">
        <Navbar.Toggle className=" " />
        {!states.UserData?.accessToken ? (
          <Link
            className="lg:hidden flex py-3 px-6 bg-primary-600 text-stone-50 rounded-md hover:bg-primary-700"
            to="/login"
          >
            Masuk
          </Link>
        ) : (
          <Button
            className="lg:hidden flex py-3 px-6 bg-primary-600 text-stone-50 rounded-md hover:bg-primary-700"
            onClick={handleLogout}
          >
            keluar
          </Button>
        )}
      </div>
      <Navbar.Collapse className="lg:w-fit lg:flex">
        <Link
          className="px-3 py-6 text-stone-500 hover:text-stone-900 "
          to="/edukasi"
        >
          Edukasi
        </Link>
        <Link
          className="px-3 py-6 text-stone-500 hover:text-stone-900 "
          to="/konsultasi"
        >
          Konsultasi
        </Link>
        <Link
          className="px-3 py-6 text-stone-500 hover:text-stone-900 "
          to="/informasi"
        >
          Informasi
        </Link>
        <Link
          className="px-3 py-6 text-stone-500 hover:text-stone-900 "
          to="/komunitas"
        >
          Komunitas
        </Link>
      </Navbar.Collapse>
      {!states.UserData?.accessToken ? (
        <Link
          className="lg:flex hidden py-3 px-6 bg-primary-600 text-stone-50 rounded-md hover:bg-primary-700"
          to="/login"
        >
          Masuk
        </Link>
      ) : (
        <Button
          className="lg:flex hidden py-3 px-6 bg-primary-600 text-stone-50 rounded-md hover:bg-primary-700"
          onClick={handleLogout}
        >
          keluar
        </Button>
      )}
    </Navbar>
  );
}

export default NavBar;
