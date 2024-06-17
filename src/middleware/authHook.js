import axios from "axios";

const axiosJWT = axios.create({
  withCredentials: true,
  headers: "Content-Type : application/json",
});
export default axiosJWT;
