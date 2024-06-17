import Edukasi2 from "../components/Edukasi/Edukasi2";
import EdukasiHead from "../components/Edukasi/EdukasiHead";
import { useEffect, useState } from "react";
import { GetAllPost } from "../middleware/dataSlice";

function Edukasi() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ isfilter: false, data: [] });
  const fetchPost = async () => {
    await GetAllPost().then((res) => setData(res));
  };
  useEffect(() => {
    fetchPost();
  }, []);
  const handleChange = (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    const keySplit = keyword.split(/\s+/);
    const result = data.filter(
      (item) =>
        keySplit.some(
          (keyword) =>
            typeof item.title === "string" &&
            item.title.toLowerCase().includes(keyword)
        ) ||
        keySplit.some(
          (keyword) =>
            Array.isArray(item.kategoris) &&
            item.kategoris.some(
              (kategori) =>
                typeof kategori === "string" &&
                kategori.toLowerCase().includes(keyword.toLowerCase())
            )
        )
    );
    setFilter({ isfilter: true, data: result });
  };
  return (
    <>
      <div>
        <EdukasiHead handleChange={handleChange} />
        <Edukasi2
          data={data}
          isfilter={filter.isfilter}
          filterData={filter.data}
        />
      </div>
    </>
  );
}

export default Edukasi;
