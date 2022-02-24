import { Navigate, Outlet } from "react-router-dom";
import { useIsLogged } from "../hooks/useIsLogged";

const IsAuthenticated = () => {
  const isLoggedIn = useIsLogged();
  if (isLoggedIn === false) {
    return <Navigate to='/login' replace />;
  }
  return <Outlet />;
};

export default IsAuthenticated;
