import { Label, TextInput, Button } from "flowbite-react";
import * as pkg from "react-icons/bi";
import { useState } from "react";
import useGeoLoc from "../../assets/map/geoLoc";
import axios from "axios";

function InformasiHead({ handleSearch, handleLoc }) {
  const [keyWord, setKeyWord] = useState("");
  const { BiSearch } = pkg;
  const handleChange = (e) => {
    const inputValue = e.target.value.trim().toLowerCase(); // Get the trimmed and lowercase value
    setKeyWord(inputValue);
    handleSearch(inputValue);
  };
  const lokasi = useGeoLoc();
  const handleLokasi = async () => {
    try {
      const response = await axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?lat=${lokasi.coordinate.lat}&lon=${lokasi.coordinate.lng}&format=json`
        )
        .then((res) => res.data.display_name);
      const addressParts = response.split(",");

      // Mengambil elemen yang berisi nama kota (indeks ke-3 dari belakang)
      const cityName = addressParts[addressParts.length - 5].trim();
      setTimeout(() => {
        handleLoc(cityName);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" w-full px-6  md:px-20 py-12 flex-col justify-start items-center gap-6 inline-flex">
        <div className="max-w-2xl w-full  flex-col justify-start items-center gap-3 flex ">
          <div className="self-stretch flex-col justify-start items-center gap-1 flex">
            <div className="self-stretch text-center text-primary-600 text-lg font-bold leading-7">
              Informasi
            </div>
            <div className="self-stretch text-center text-stone-900 text-4xl font-bold leading-10">
              Cari dokter, Obat, Apotek terdekat anda Disini!
            </div>
          </div>
          <div className="self-stretch text-center text-stone-500 text-base font-normal leading-normal">
            Akses Cepat ke Dokter, Bidan, dan Rumah Sakit Terdekat dengan
            Teknologi GPS Kami yang mudah Digunakan.
          </div>
        </div>
        <div className="flex h-fit">
          {/* Search Button */}
          <div className="px-6 py-3 rounded-xl justify-center items-center inline-flex">
            <div className="max-w-md">
              <TextInput
                id="email4"
                type="email"
                icon={BiSearch}
                onChange={handleChange}
                value={keyWord}
                placeholder="Cari apapun, disini"
                required
              />
            </div>
          </div>
          <Button
            onClick={handleLokasi}
            className="bg-primary-700 hover:bg-primary-800  h-fit self-center"
          >
            Aktifkan GPS
          </Button>
        </div>
        {/* Search Button End */}
      </div>
    </>
  );
}

export default InformasiHead;
