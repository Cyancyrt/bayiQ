/* eslint-disable react/prop-types */
import CardSesi from "./CardSesi";

function FilterKonsul({ dokter, filterData, isActive }) {
  return (
    <>
      <div className="flex justify-center w-full h-fit  place-self-center bg-stone-100">
        <div className="max-w-[1440px] w-full px-6 md:px-20 py-12 grid gap-6">
          <h1 className="text-stone-700">Menampilkan hasil filter</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 w-full">
            {(isActive ? filterData : dokter)?.map((key, index) => (
              <CardSesi
                key={index}
                id={key.uid}
                name={key.name}
                kategori={key.kategori}
                spesialisasi={key.roles}
                biayas={key.biaya}
                hari={key.jadwalHari}
                jadwal={key.jamTerbang}
                rating={key.rating}
                rumahSakit={key.rumahSakit.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterKonsul;
