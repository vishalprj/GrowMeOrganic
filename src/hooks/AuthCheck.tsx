import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export type AuthCheckType = {
  children: ReactNode;
};

const AuthCheck = ({ children }: AuthCheckType) => {
  const navigate = useNavigate();

  useEffect(() => {
    const details = localStorage.getItem("userDetails");
    if (!details) {
      toast.error("You must enter your details before accessing this page.");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthCheck;
