import { Button, Modal } from "flowbite-react";
import Image1 from "../../assets/assets/image/image1.jpg";
import * as pkg from "react-icons/fa";
import * as pkgmd from "react-icons/md";
import { useState } from "react";
import UseAxiosPriv from "../../middleware/AxiosPriv";
import { useParams } from "react-router";

const HeadKonfirm = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const { MdWorkHistory } = pkgmd;
  const axiosJWT = UseAxiosPriv();
  const { id } = useParams();
  const { FaStar } = pkg;
  const handleBayar = () => {
    const fetchBooking = async () => {
      await axiosJWT
        .patch(`${import.meta.env.VITE_API_URL}/api/booking/${id}`)
        .then((res) => console.log(res));
    };
    fetchBooking();
  };
  return (
    <>
      <div className="w-full max-w-[1440px] px-12 mx-auto  h-screen">
        <div className="grid  py-4 w-full gap-4">
          <div className="self-stretch flex-col flex">
            <h1 className="self-stretch text-left text-stone-900 text-2xl font-bold leading-10">
              Konfirmasi Jadwal Konsultasi
            </h1>
          </div>
          {/* card */}
          <div className="w-full">
            <div className="grid lg:flex border border-stone-400 rounded-2xl bg-stone-50 p-4 gap-3 w-full justify-between">
              <div className="grid w-full lg:w-96">
                <div className="w-full">
                  <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    konsultasi {data?.dokter?.kategori}
                  </h5>
                  <p className="text-sm  font-normal text-gray-700 dark:text-gray-400">
                    Konsultasi Psikologi Anak Balita
                  </p>
                </div>

                <div className="flex text-sm text-stone-700 justify-between">
                  <p>Jumat, 5 April 2024</p>
                  <p>{data?.dokter?.jamTerbang}</p>
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
                    {data?.dokter?.name}
                  </h1>
                  <p className="text-sm text-stone-500">
                    data {data?.dokter?.roles} di
                    {data?.dokter?.rumahSakit.name}
                  </p>
                  <div className="flex gap-4">
                    <div className=" flex gap-2 items-center">
                      <FaStar className="text-yellow-400" />
                      <p className="text-sm font-semibold text-stone-700">
                        {data?.dokter?.rating}
                      </p>
                    </div>
                    <div className=" flex gap-2 items-center">
                      <MdWorkHistory />
                      <p className="text-sm font-semibold text-stone-700">
                        {data?.dokter?.pengalaman} tahun
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END - data data */}

              <div className="grid gap-2 h-fit  lg:w-60">
                <div className=" flex font-extrabold text-xl text-stone-700 place-self-end">
                  <p>Rp.</p>
                  <p>{data.biaya}</p>
                </div>
                {/* button */}
                <Button
                  onClick={() => setOpenModal(true)}
                  className="bg-primary-700 text-stone-100 font-semibold text-center  rounded-xl hover:bg-primary-800 w-full my-2"
                >
                  Bayar
                </Button>

                {/* Modal */}
                <Modal
                  dismissible
                  show={openModal}
                  onClose={() => setOpenModal(false)}
                >
                  <Modal.Header>Pilih Metode Pembayaran</Modal.Header>
                  <Modal.Body className="grid gap-2">
                    <div className="space-y-6 border border-stone-300 rounded-lg ">
                      <Button
                        onClick={() => {
                          setOpenModal(false), handleBayar();
                        }}
                        className="text-stone-700 w-full hover:bg-stone-200"
                      >
                        E-Wallet A
                      </Button>
                    </div>
                    <div className="space-y-6 border border-stone-300 rounded-lg ">
                      <Button
                        onClick={() => setOpenModal(false)}
                        className="text-stone-700 w-full hover:bg-stone-200"
                      >
                        M-Banking A
                      </Button>
                    </div>
                    <div className="space-y-6 border border-stone-300 rounded-lg ">
                      <Button
                        onClick={() => setOpenModal(false)}
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
        </div>
      </div>
    </>
  );
};

export default HeadKonfirm;
