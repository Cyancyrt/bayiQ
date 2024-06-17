import axios from "axios";
import { useUserContext } from "./LoginSlice";

const RefToken = () => {
  const { dispatch } = useUserContext();
  const refresh_token = async () => {
    const res = await axios
      .get(`${import.meta.env.VITE_API_URL}/api/token`, {
        withCredentials: true,
      })
      .then((res) => res?.data);
    dispatch({ type: "REFRESH", payload: res });
    return res.accessToken;
  };
  return { refresh_token };
};
// test
export default RefToken;
