import Informasi2 from "../components/Informasi/Informasi2";
import Informasi3 from "../components/Informasi/Informasi3";
import Informasi4 from "../components/Informasi/Informasi4";
import InformasiHead from "../components/Informasi/InformasiHead";
import { useState, useEffect } from "react";
import { GetAllBidan, GetAllDokter, GetAllRs } from "../middleware/dataSlice";

function Informasi() {
  const [data, setData] = useState({ bidan: [], dokter: [], rumahSakit: [] });
  const [result, setResult] = useState({ isActive: false, data: [] });
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const fetch = [GetAllBidan(), GetAllDokter(), GetAllRs()];
        const [bidanRes, dokterRes, rsRes] = await Promise.all(fetch);
        setData({
          bidan: bidanRes,
          dokter: dokterRes,
          rumahSakit: rsRes,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllData();
  }, []);
  const handleSearch = (search) => {
    const keywords = search.trim().split(/\s+/);
    if (!keywords.length) {
      setResult({ isActive: false, data: [] });
      return;
    }

    const filterItems = (items) =>
      items.filter((item) =>
        keywords.every((keyword) => item.name.toLowerCase().includes(keyword))
      );

    const results = {
      dokter: filterItems(data.dokter),
      bidan: filterItems(data.bidan),
      rumahSakit: filterItems(data.rumahSakit),
    };

    setResult({ isActive: true, data: results });
  };
  const handleLoc = (location) => {
    const keywords = location.toLowerCase();
    const results = {
      dokter: data.dokter.filter(
        (item) =>
          typeof item.name === "string" &&
          item?.lokasi.split(",")[1].toLowerCase().includes(keywords)
      ),

      bidan: data.bidan.filter(
        (item) =>
          typeof item.name === "string" &&
          item?.lokasi.split(",")[1].toLowerCase().includes(keywords)
      ),

      rumahSakit: data.rumahSakit.filter(
        (item) =>
          typeof item.name === "string" &&
          item?.lokasi.split(",")[1].toLowerCase().includes(keywords)
      ),
    };
    if (keywords === "" || keywords === null || keywords === undefined) {
      setResult({ isActive: false, data: [] }); // Set isActive menjadi false
      return; // Keluar dari fungsi handlekeywords
    }
    setResult({ isActive: true, data: results });
  };
  return (
    <>
      <div>
        <InformasiHead handleSearch={handleSearch} handleLoc={handleLoc} />
        <Informasi2
          dokter={result.isActive ? result.data.dokter : data.dokter}
        />
        <Informasi3 bidan={result.isActive ? result.data.bidan : data.bidan} />
        <Informasi4
          rumahSakit={
            result.isActive ? result.data.rumahSakit : data.rumahSakit
          }
        />
      </div>
    </>
  );
}

export default Informasi;
