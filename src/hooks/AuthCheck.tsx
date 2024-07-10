import { ReactNode, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export type AuthCheckType = {
  children: ReactNode;
};

const AuthCheck = ({ children }: AuthCheckType) => {
  const navigate = useNavigate();
  const initialLoad = useRef(true);

  useEffect(() => {
    const details = localStorage.getItem("userDetails");

    if (!details) {
      if (!initialLoad.current) {
        console.log("Navigating to login and showing toast");
        toast.error("You must enter your details before accessing this page.");
      } else {
        console.log("Initial load: navigating to login without toast");
      }
      navigate("/login");
    }

    initialLoad.current = false;
  }, [navigate]);

  return <>{children}</>;
};

export default AuthCheck;
