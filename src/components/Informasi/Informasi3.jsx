import CardBidan from "./CardBidan";

function Informasi3({ bidan }) {
  return (
    <>
      <div className="flex justify-center w-full h-fit  place-self-center">
        <div className="max-w-[1440px] w-fit md:w-full px-6 md:px-20 py-12 justify-between grid gap-6">
          <h1 className="font-bold text-xl text-stone-800">
            Bidan terdekat dari rumah Anda
          </h1>
          <div className="self-stretch justify-start items-start gap-6 grid md:grid-cols-2 lg:grid-cols-4">
            {bidan.map((bidanData, index) => (
              <div key={index}>
                <CardBidan
                  id={bidanData.uid}
                  lamaKerja={bidanData.pengalaman}
                  name={bidanData.name}
                  roles={bidanData.roles}
                  rating={bidanData.rating}
                  lokasi={bidanData.lokasi}
                />
                {/* Tambahkan kode lain untuk menampilkan informasi dokter lainnya */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Informasi3;
