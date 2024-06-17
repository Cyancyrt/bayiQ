import { FiPlus } from "react-icons/fi";
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../middleware/LoginSlice";
import LogOut from "../../middleware/Logout";
import axios from "axios";
import { apiUrl } from "../../middleware/dataSlice";

function DashProfile({ data }) {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [imageChanged, setImageChanged] = useState(false);
  const [image, newImage] = useState(null);
  const [datas, setData] = useState({ Image: "" });
  const { dispatch } = useUserContext();
  const navigate = useNavigate();

  function setImage(event) {
    const file = event.target.files[0]; // Assuming only one file is selected
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const uploadedImageUrl = reader.result;
        newImage(uploadedImageUrl);
      };
      reader.readAsDataURL(file); // Convert file to data URL
    }
  }

  useEffect(() => {
    setData({ ...data, Image: data.image });
  }, []);
  function changeImage(e) {
    e.preventDefault();
    setData({ ...data, Image: e.target.files[0] });
  }
  const handleLogout = async () => {
    await LogOut();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  function HandleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", datas.Image);
    try {
      const fetch = async () => {
        await axios
          .patch(`${apiUrl}/api/user/${id}`, formData)
          .then((res) => {
            navigate(0);
          })
          .catch((err) => console.error(err));
      };
      fetch();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className=" grid gap-4">
        <h1 className="text-xl font-semibold text-stone-700">Profile</h1>

        <div className="grid md:flex md:flex-wrap gap-4 ">
          {/* Change Profile Photo */}
          <form onSubmit={HandleSubmit}>
            <div className="flex gap-2 border border-stone-300 px-2 py-4 relative bg-rose-50 mx-auto md:mx-0 rounded-2xl">
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => {
                  changeImage(e);
                  setImage(e);
                  setImageChanged(true); // Set imageChanged to true when the image changes
                }}
                style={{ display: "none" }}
                id="upload-photo"
              />
              <label htmlFor="upload-photo" className="relative">
                {datas.Image || data.image ? (
                  <>
                    <img
                      src={image || data.image}
                      className="h-32 md:h-52 w-32 md:w-52 object-cover relative rounded-3xl mx-auto"
                      alt=""
                    />
                    {imageChanged && ( // Conditionally render upload button if image has changed
                      <button
                        type="submit"
                        className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md"
                      >
                        Upload
                      </button>
                    )}
                  </>
                ) : (
                  <div className="h-32 md:h-52 w-32 md:w-52 bg-gray-200 flex items-center justify-center rounded-3xl">
                    <FiPlus className="text-3xl text-gray-400" />
                  </div>
                )}
              </label>
            </div>
          </form>
          {/* Change Profile Photo */}
          {/* Profil lainnya */}
          <div className="grid gap-2 max-w-xs md:max-w-lg w border  border-stone-300  p-4 relative bg-rose-50 mx-auto md:mx-0 rounded-2xl">
            <div className="grid gap-3 h-fit">
              <h1 className="text-xl font-semibold text-stone-800">
                Identitas
              </h1>
              <div className="grid h-fit gap-2 md:gap-3">
                <div className="flex w-fit h-fit gap-2 text-xs md:text-sm text-wrap">
                  <p className="w-20 md:w-32 text-stone-700">Username</p>
                  <p className="w-80 font-semibold text-stone-800">
                    {data.username}
                  </p>
                </div>

                <div className="flex w-fit h-fit gap-2 text-xs md:text-sm text-wrap  ">
                  <p className="w-20 md:w-32 text-stone-700">Email</p>
                  <p className="w-48md:w-80 font-semibold text-stone-800 text-wrap">
                    {data.email}
                  </p>
                </div>
                <div className="flex w-fit h-fit gap-2 text-xs md:text-sm text-wrap">
                  <p className="w-20 md:w-32 text-stone-700">No Telpon</p>
                  <p className="w-80 font-semibold text-stone-800">
                    {data.nomor_telepon}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid max-w-72 md:max-w-xs  gap-2 md:gap-3">
              <Button
                onClick={() => setOpenModal(true)}
                className="bg-red-700 max-w-xs"
              >
                Logout
              </Button>
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
                      Apakah anda yakin ingin keluar?
                    </h3>
                    <div className="flex justify-center gap-4">
                      <Button
                        color="failure"
                        onClick={() => {
                          setOpenModal(false), handleLogout();
                        }}
                      >
                        {"Ya, saya Yakin"}
                      </Button>
                      <Button color="gray" onClick={() => setOpenModal(false)}>
                        Tidak, Kembali
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashProfile;
