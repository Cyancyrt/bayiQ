import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import RefToken from "./refreshToken";
import { useUserContext } from "./LoginSlice";

const PersLog = () => {
  const [load, setLoad] = useState(true);
  const { states } = useUserContext();
  const { refresh_token } = RefToken();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      const VerToken = async () => {
        try {
          await refresh_token();
          setLoad(false);
        } catch (error) {
          setLoad(true);
          console.log(error);
        }
      };
      !states?.UserData?.session ? VerToken() : setLoad(false);
    }
  }, []);
  return <Outlet />;
};

export default PersLog;
