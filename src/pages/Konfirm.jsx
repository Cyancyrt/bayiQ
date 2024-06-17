import { useEffect, useState } from "react";
import HeadKonfirm from "../components/Konfirmasi/HeadKonfirm";
import { useParams } from "react-router-dom";
import UseAxiosPriv from "../middleware/AxiosPriv";

function Konfirm() {
  const axiosJWT = UseAxiosPriv();
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = () => {
      try {
        axiosJWT
          .get(`${import.meta.env.VITE_API_URL}/api/booking/${id}`)
          .then((res) => setData(res.data.data))
          .catch((err) => console.log(err));
      } catch (error) {
        // Tangani kesalahan jika terjadi
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <div>
        <HeadKonfirm data={data} />
      </div>
    </>
  );
}

export default Konfirm;
