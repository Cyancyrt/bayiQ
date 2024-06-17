import { useState, useEffect } from "react";
import FilterKonsul from "./FilterKonsul";
import PilihSesiForm from "./PilihSesiForm";
import { GetAllDokter } from "../../middleware/dataSlice";
import { cekHari } from "../../middleware/funct";

function HeadPilihSesi() {
  // const { kategori, tanggal } = location.state;
  const [result, setResult] = useState({
    isActive: "",
    data: "",
  });

  const [dokter, setDokter] = useState([]);
  const fetchDokter = async () => {
    await GetAllDokter().then((res) => setDokter(res));
  };
  useEffect(() => {
    fetchDokter();
  }, []);
  const handleFilter = (Search, date, range) => {
    let filteredData = dokter;
    if (Search) {
      filteredData = filteredData.filter((item) =>
        item.kategori?.toLowerCase().includes(Search.toLowerCase())
      );
      range ? range : (range = null);
    }
    const tempDate = new Date(date);
    const hari = cekHari(tempDate.getDay())?.toLowerCase();
    if (date) {
      filteredData = filteredData.filter((item) =>
        item.jadwalHari.toLowerCase().includes(hari)
      );
    }
    if (range) {
      filteredData = filteredData.filter((item) => {
        return (
          item.biaya >= parseInt(range.A) && item.biaya <= parseInt(range.B)
        );
      });
    }
    if ((Search & date & range) === "") {
      setResult({ isActive: false, data: [] });
    }
    setResult({
      isActive: true,
      data: filteredData,
    });
  };
  return (
    <>
      <div className="w-full mx-auto justify-start items-center grid">
        <div className="max-w-2xl mx-auto py-4 w-full  flex-col justify-start items-center gap-3 flex ">
          <div className="self-stretch flex-col justify-start items-center gap-1 flex">
            <div className="self-stretch text-center text-primary-600 text-lg font-bold leading-7">
              Pilih Sesi
            </div>
            <div className="self-stretch text-center text-stone-900 text-4xl font-bold leading-10">
              Pilih Jadwal Konsultasi
            </div>
          </div>
          <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
            Kami bekerja sama dengan dokter berpengalaman dan terpercaya, Harga
            terjangkau bagi semua orang. Serta akses dimana saja dan kapan saja.
          </div>
        </div>
        <PilihSesiForm handleFilter={handleFilter} />
        <FilterKonsul
          dokter={dokter}
          filterData={result.data}
          isActive={result.isActive}
        />
      </div>
    </>
  );
}

export default HeadPilihSesi;
