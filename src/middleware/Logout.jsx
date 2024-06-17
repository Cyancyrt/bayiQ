import axios from "axios";
const LogOut = async () => {
  try {
    await axios
      .delete(`${import.meta.env.VITE_API_URL}/api/logout`, {
        withCredentials: true,
      })
      .then(() => {
        localStorage.removeItem("userToken");
      });
  } catch (error) {
    console.error("error saat logout : ", error);
  }
};
export default LogOut;
