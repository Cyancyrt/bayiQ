import DashProfile from "../components/Dashboard/DashboardTab";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetOneUser } from "../middleware/dataSlice";
function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetchProfile = async () => {
    await GetOneUser(id).then((res) => setData(res));
  };
  useEffect(() => {
    try {
      fetchProfile();
    } catch (error) {
      console.log(error);
    }
    fetchProfile();
  }, []);
  return (
    <>
      <div className="grid md:flex gap-2 w-full max-w-[1440px] min-h-screen  p-4 md:p-8 mx-auto">
        <h1 className="font-bold text-3xl  text-stone-800">Dashboard</h1>
        <DashProfile data={data} idUser={id} />
      </div>
    </>
  );
}

export default Dashboard;
