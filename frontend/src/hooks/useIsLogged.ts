import { useEffect, useState } from "react";

export const useIsLogged = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const checkToken = () => {
    const token: string | null = localStorage.getItem("access-token");
    console.log("token", token);
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    checkToken();
  }, []);
  return isLoggedIn;
};
