import CardDokter from "./CardDokter";

function Informasi2({ dokter }) {
  return (
    <>
      <div className="flex justify-center w-full h-fit  place-self-center">
        <div className="max-w-[1440px] w-fit md:w-full px-6 md:px-20 py-12 justify-between grid gap-6">
          <h1 className="font-bold text-xl text-stone-800">
            Dokter terdekat dari rumah Anda
          </h1>
          <div className="self-stretch justify-start items-start gap-6 grid md:grid-cols-2 lg:grid-cols-4">
            {dokter.map((res, index) => [
              <div key={index}>
                <CardDokter
                  id={res.uid}
                  name={res.name}
                  rating={res.rating}
                  roles={res.roles}
                  lamaKerja={res.pengalaman}
                />
              </div>,
            ])}
          </div>
        </div>
      </div>
    </>
  );
}

export default Informasi2;
