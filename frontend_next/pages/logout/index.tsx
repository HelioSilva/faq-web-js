import Router from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const LogOut = () => {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, []);

  return (
    <div>
      <h3>Loading...</h3>
    </div>
  );
};

export default LogOut;
