import { useState } from "react";
import Image1 from "../../assets/assets/image/image1.jpg";
import * as pkg from "react-icons/fa";
import * as pkgmd from "react-icons/md";
import { Modal, Button } from "flowbite-react";
import UseAxiosPriv from "../../middleware/AxiosPriv.jsx";

function CardSesidb({ data, err }) {
  const { FaStar } = pkg;
  const { MdWorkHistory } = pkgmd;
  const [openModal, setOpenModal] = useState(false);
  const axiosJWT = UseAxiosPriv();
  const handleBayar = async (id) => {
    setTimeout(() => {
      axiosJWT
        .patch(`${import.meta.env.VITE_API_URL}/api/booking/${id}`)
        .catch((err) => err);
      setOpenModal(false);
    }, 500);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <>
      <div>
        {/* card */}
        {data?.map(
          (key, index) =>
            key.history === false && (
              <div className="w-full" key={index}>
                <div className="grid lg:flex border border-stone-400 rounded-2xl bg-stone-50 p-4 gap-3 w-full justify-between">
                  <div className="grid w-full lg:w-96">
                    <div className="w-full">
                      <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        Konsultasi {key.dokter.kategori}
                      </h5>
                      <p className="text-sm  font-normal text-gray-700 dark:text-gray-400">
                        Konsultasi {key.dokter.kategori}
                      </p>
                    </div>

                    <div className="flex text-sm text-stone-700 justify-between">
                      <p>Hari :{key.dokter.jadwalHari}</p>
                      <p>Jam :{key.dokter.jamTerbang}</p>
                    </div>
                  </div>

                  {/* data dokter */}
                  <div className="flex p-2 border border-stone-400 rounded-3xl gap-4 md:min-w-72">
                    <img
                      src={Image1}
                      className="w-16 h-16 object-cover rounded-2xl"
                      alt=""
                    />
                    <div>
                      <h1 className="text-base md:text-xl font-semibold text-stone-800">
                        {key.dokter.name}
                      </h1>
                      <p className="text-sm text-stone-500">
                        Dokter {key.dokter.roles} di{" "}
                        {key.dokter.rumahSakit.name}
                      </p>
                      <div className="flex gap-4">
                        <div className=" flex gap-2 items-center">
                          <FaStar className="text-yellow-400" />
                          <p className="text-sm font-semibold text-stone-700">
                            {key.dokter.rating}
                          </p>
                        </div>
                        <div className=" flex gap-2 items-center">
                          <MdWorkHistory />
                          <p className="text-sm font-semibold text-stone-700">
                            {key.dokter.pengalaman} tahun
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END - data dokter */}

                  <div className="grid gap-2 h-fit  lg:w-60">
                    <div className=" flex font-extrabold text-xl text-stone-700 place-self-end">
                      <p>Rp.</p>
                      <p>{key.biaya}</p>
                    </div>

                    {/* button */}
                    <Button
                      onClick={() => {
                        setOpenModal(true);
                      }}
                      className="bg-primary-700 text-stone-100 font-semibold text-center  rounded-xl hover:bg-primary-800 w-full my-2"
                    >
                      bayar
                    </Button>

                    {/* Modal */}
                    <Modal dismissible show={openModal}>
                      <Modal.Header>Pilih Metode Pembayaran</Modal.Header>
                      <Modal.Body className="grid gap-2">
                        <div className="space-y-6 border border-stone-300 rounded-lg ">
                          <Button
                            onClick={() => handleBayar(key.uuid)}
                            className="text-stone-700 w-full hover:bg-stone-200"
                          >
                            E-Wallet A
                          </Button>
                        </div>
                        <div className="space-y-6 border border-stone-300 rounded-lg ">
                          <Button
                            onClick={() => handleBayar(key.uuid)}
                            className="text-stone-700 w-full hover:bg-stone-200"
                          >
                            M-Banking A
                          </Button>
                        </div>
                        <div className="space-y-6 border border-stone-300 rounded-lg ">
                          <Button
                            onClick={() => handleBayar(key.uuid)}
                            className="text-stone-700 w-full hover:bg-stone-200"
                          >
                            M-Banking B
                          </Button>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      {err ? err : null}
    </>
  );
}

export default CardSesidb;
