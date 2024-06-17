/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Image1 from "../../assets/assets/image/dokterCewe1.jpg";
import Image2 from "../../assets/assets/image/dokterLaki.jpg";
import * as pkg from "react-icons/fa";
import * as hipkg from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../middleware/LoginSlice";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import UseAxiosPriv from "../../middleware/AxiosPriv.jsx";

const CardSesi = ({
  name,
  spesialisasi,
  biayas,
  jadwal,
  hari,
  rating,
  rumahSakit,
  id,
}) => {
  const { states } = useUserContext();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { FaStar } = pkg;
  const { HiOutlineExclamationCircle } = hipkg;
  const axiosJWT = UseAxiosPriv();
  const handleSubmit = (e) => {
    try {
      const fetch = async () => {
        await axiosJWT
          .post(
            `${import.meta.env.VITE_API_URL}/api/booking`,
            {
              userId: states?.UserData?.session,
              dokterId: id,
              biaya: biayas,
            },
            { withCredentials: true }
          )
          .then((res) =>
            navigate(`/pilihsesi/konfirmasi/${res.data.data.uuid}`)
          )
          .catch((err) => console.log(err));
      };
      fetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="border border-stone-400 rounded-2xl bg-stone-50 p-3 gap-3 max-w-sm">
        <div className="flex justify-between">
          <div className="">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Sesi 4
            </h5>
            <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
              Konsultasi {spesialisasi}
            </p>
          </div>
          <div className="flex font-extrabold text-xl text-stone-700">
            <p>Rp.</p>
            <p>{biayas}</p>
          </div>
        </div>

        <div className="flex p-2 border border-stone-400 rounded-3xl gap-4">
          <img
            src={Image1}
            className="w-20 h-20 object-cover rounded-full"
            alt=""
          />
          <div>
            <h1 className="text-xl font-semibold text-stone-800">{name}</h1>
            <p className="text-sm text-stone-500">
              Dokter Anak di {rumahSakit}
            </p>
            <div className="flex gap-2 items-center">
              <FaStar className="text-yellow-400" />
              <p className="text-sm font-semibold text-stone-700">{rating}</p>
            </div>
          </div>
        </div>
        {/* END - dokter */}

        <div className="flex text-sm text-stone-700 justify-between">
          <p>{hari}</p>
          <p>jadwal : {jadwal}</p>
        </div>
        {states.user === "user" ? (
          <Button
            onClick={() => setOpenModal(true)}
            className="w-full bg-primary-700 text-stone-100 font-semibold text-center py-2 rounded-xl hover:bg-primary-800 my-2"
          >
            Jadwalkan
          </Button>
        ) : (
          <Link
            to="/login"
            className="block w-full bg-primary-700 text-stone-100 font-semibold text-center py-2 rounded-xl hover:bg-primary-800 my-2"
          >
            Login
          </Link>
        )}
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Apakah Anda yakin ingin menjadwalkan?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="success"
                  onClick={() => {
                    setOpenModal(false);
                    handleSubmit();
                  }}
                >
                  Ya, Saya Yakin
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Tidak, Batalkan
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default CardSesi;
