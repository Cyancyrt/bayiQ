import { useUserContext } from "./LoginSlice";
import { Navigate, Outlet } from "react-router-dom";
export const CekAuth = () => {
  const { states } = useUserContext();

  // Fungsi penundaan navigasi
  const navigateWithDelay = (to, replace, delayTime) => {
    setTimeout(() => {
      return <Navigate to={to} replace={replace} />;
    }, delayTime);
  };

  return !states.load ? (
    <Outlet />
  ) : states.UserData.accessToken ? (
    navigateWithDelay("/login", true, 3000) // Navigasi ke "/login" dengan penundaan 2 detik
  ) : (
    navigateWithDelay("/Unauthorize", true, 3000) // Navigasi ke "/Unauthorize" dengan penundaan 2 detik
  );
};
export default CekAuth;
