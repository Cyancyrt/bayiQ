// import React from "react";
import { Outlet } from "react-router-dom";
import Michie from "../assets/assets/image/pattern-1.png";
import AppFooter from "../app/components/AppFooter";
import { GetOneUser } from "../middleware/dataSlice";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AppLayout() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const { id } = useParams();
  const fetchProfile = async () => {
    await GetOneUser(id).then((res) => setData(res));
  };
  useEffect(() => {
    try {
      fetchProfile();
    } catch (error) {
      setErr(error);
    }
    fetchProfile();
  }, []);
  return (
    <>
      <div
        className="bg-repeat bg-center h-screen"
        style={{ backgroundImage: `url(${Michie})` }}
      >
        <div className="w-full h-full bg-stone-400/70">
          <div className="max-w-sm mx-auto bg-primary-50 overflow-y-scroll h-screen">
            <div>
              <Outlet context={data} />
            </div>
            <div className="absolute bottom-0 z-50 max-w-sm w-full bg-white px-8 py-6">
              <AppFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
