import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Sidebar, TextInput, Navbar } from "flowbite-react";
import {
    HiHome,
    HiSpeakerphone,
    HiPencilAlt,
    HiSearch,
    HiUsers,
    HiMenu,
} from "react-icons/hi";
import Footer from "../components/Footer"; // Correct import statement
import Michie from "../assets/assets/image/pattern-1.png";

const DrSidebar = ({ isSidebarOpen }) => {
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        const newPage = window.location.pathname;
        setCurrentPage(newPage);
    }, []);

    return (
        <Sidebar
            className={`h-full mt-24 md:mt-0  md:static absolute inset-0 transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-200 ease-in-out`}
        >
            <div className="flex h-full flex-col justify-between py-2 ">
                <div>
                    <form className="pb-3 md:hidden">
                        <TextInput
                            icon={HiSearch}
                            type="search"
                            placeholder="Search"
                            required
                            size={32}
                        />
                    </form>
                    <Sidebar.Items className="">
                        <Sidebar.ItemGroup className="">
                            <Sidebar.Item
                                href="/dokter/"
                                icon={HiHome}
                                className=""
                            >
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/dokter/list"
                                icon={HiSpeakerphone}
                                className={
                                    "/dokter/list" === currentPage ? "" : ""
                                }
                            >
                                Dokter
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/dokter/member/"
                                icon={HiUsers}
                                className={
                                    "/dokter/member/" === currentPage ? "" : ""
                                }
                            >
                                Member
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/dokter/post/"
                                icon={HiPencilAlt}
                            >
                                Post
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                icon=""
                                className="bg-red-700 text-white hover:bg-red-800 text-center"
                            >
                                Logout
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </div>
            </div>
        </Sidebar>
    );
};

DrSidebar.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired, // PropTypes validation
};

const DrNavBar = ({ toggleSidebar }) => {
    return (
        <Navbar fluid className="bg-green-400">
            <div className="w-full p-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Navbar.Brand href="/dokter/">
                            <span className="self-center whitespace-nowrap text-2xl font-semibold ">
                                Admin Dokter
                            </span>
                        </Navbar.Brand>
                    </div>
                    <div className="flex items-center gap-3 md:hidden">
                        {/* <DarkThemeToggle /> */}
                        <button
                            className="p-4 text-stone-700"
                            onClick={toggleSidebar}
                        >
                            <HiMenu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </Navbar>
    );
};

DrNavBar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired, // PropTypes validation
};

const DrinLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <DrNavBar toggleSidebar={toggleSidebar} />
            <div className="flex bg-primary-100 min-h-screen max-w-screen-2xl mx-auto">
                <div>
                    <DrSidebar isSidebarOpen={isSidebarOpen} />
                </div>
                <div
                    className="w-full  min-h-screen justify-between bg-repeat bg-center"
                    style={{ backgroundImage: `url(${Michie})` }}
                >
                    <div className="w-full h-full bg-stone-300/50 p-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DrinLayout;
