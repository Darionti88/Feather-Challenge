import { Navigate, Outlet } from "react-router-dom";
import { useIsLogged } from "../hooks/useIsLogged";

const IsAuthenticated = () => {
  // const navigate = useNavigate();
  const isLoggedIn = useIsLogged();
  console.log(isLoggedIn);
  if (isLoggedIn === false) {
    return <Navigate to='/login' replace />;
  }
  return <Outlet />;
};

export default IsAuthenticated;
