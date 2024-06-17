import { useEffect, useRef } from "react";
import axiosJWT from "./authHook";
import RefToken from "./refreshToken";
import { useUserContext } from "./LoginSlice";
///get API CUSTOM WITH AXIOS
const UseAxiosPriv = () => {
  const { refresh_token } = RefToken();
  const { states } = useUserContext();
  useEffect(() => {
    const ReqInt = axiosJWT.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${states.UserData.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const ResInt = axiosJWT.interceptors.response.use(
      (res) => res,
      async (error) => {
        const prevRes = error?.config;
        if (error?.response?.status == 401 && !prevRes?.sent) {
          prevRes.sent = true;
          const NewResponse = await refresh_token();
          prevRes.headers["Authorization"] = `Bearer ${NewResponse}`;
          return axiosJWT(prevRes);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosJWT.interceptors.response.eject(ResInt);
      axiosJWT.interceptors.request.eject(ReqInt);
    };
  }, [states, refresh_token]);
  return axiosJWT;
};
export default UseAxiosPriv;
// test
