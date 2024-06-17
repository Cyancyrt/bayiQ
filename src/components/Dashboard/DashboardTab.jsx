import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import DashProfile from "./DashProfile";
import DashKonsultasi from "./DashKonsul";
import DashHistory from "./DashHistory";
import UseAxiosPriv from "../../middleware/AxiosPriv";
import { useState, useEffect } from "react";

function DashboardTab({ data, idUser }) {
  const axiosJWT = UseAxiosPriv();
  const [err, setErr] = useState("");
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      setTimeout(async () => {
        try {
          await axiosJWT
            .get(`${import.meta.env.VITE_API_URL}/api/booking/all/${idUser}`, {
              withCredentials: true,
            })
            .then((res) => setBooking(res?.data.data))
            .catch((err) => setErr(err?.response.data.Message));
        } catch (error) {
          // Tangani kesalahan jika terjadi
          console.log("Error fetching data:", error);
        }
      }, 1000);
    };
    fetch();
  }, []);
  return (
    <>
      <div className=" w-full max-w-3xl mx-auto pb-12">
        <Tabs aria-label="Tabs with underline" style="underline">
          <Tabs.Item active title="Profile" icon={HiUserCircle}>
            <DashProfile data={data} />
          </Tabs.Item>
          <Tabs.Item title="Konsultasi" icon={MdDashboard}>
            <DashKonsultasi booking={booking} err={err} />
          </Tabs.Item>
          <Tabs.Item title="History" icon={HiAdjustments}>
            <DashHistory idUser={idUser} />
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
}

export default DashboardTab;
