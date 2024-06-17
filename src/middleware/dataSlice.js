import axios from "axios";
import useAxiosPriv from "./AxiosPriv";

export const apiUrl = import.meta.env.VITE_API_URL;
export const GetAllDokter = async () => {
  return await axios
    .get(`${apiUrl}/api/dokter`)
    .then((res) => res.data.data)
    .catch((err) => err);
};

export const GetOneDokter = async (id) => {
  return await axios
    .get(`${apiUrl}/api/dokter/${id}`)
    .then((res) => res.data.data)
    .catch((err) => err);
};

export const GetAllPost = async () => {
  return await axios
    .get(`${apiUrl}/api/post`)
    .then((res) => res.data.data)
    .catch((err) => err);
};

export const GetOnePost = async (id) => {
  return await axios
    .get(`${apiUrl}/api/post/${id}`)
    .then((res) => res.data.data)
    .catch((err) => err);
};

export const GetAllBidan = async () => {
  return await axios
    .get(`${apiUrl}/api/bidan`)
    .then((res) => res.data.data)
    .catch((err) => err);
};

export const GetOneBidan = async (id) => {
  return await axios
    .get(`${apiUrl}/api/bidan/${id}`)
    .then((res) => res.data.data)
    .catch((err) => err);
};

export const GetAllRs = async () => {
  return await axios
    .get(`${apiUrl}/api/rumah-sakit`)
    .then((res) => res.data.data)
    .catch((err) => err);
};

export const GetOneRs = async (id) => {
  return await axios
    .get(`${apiUrl}/api/rumah-sakit/${id}`)
    .then((res) => res.data.data)
    .catch((err) => err);
};

export const GetOneUser = async (id) => {
  // const axiosJWT = useAxiosPriv();
  return await axios
    .get(`${apiUrl}/api/user/${id}`)
    .then((res) => res.data.data)
    .catch((err) => err);
};
export const GetAllBooking = async (id) => {
  const axiosJWT = useAxiosPriv();
  return axiosJWT
    .get(`${apiUrl}/api/all/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const GetAllKomentar = async () => {
  return await axios
    .get(`${apiUrl}/api/komentar`)
    .then((res) => res.data.data)
    .catch((err) => err);
};
export const GetOneKomentar = async (id) => {
  return await axios
    .get(`${apiUrl}/api/komentar/${id}`)
    .then((res) => res.data.data)
    .catch((err) => err);
};
