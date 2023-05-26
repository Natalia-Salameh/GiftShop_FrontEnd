import React from "react";
import LoginPage from "../../pages/Login";
import AuthContext from "../../context/AuthConetxt";
import { useContext } from "react";

const ProtectRoute = (props) => {
  const { isLoging } = useContext(AuthContext); // use this in nav if is true loging then we turn it to logout
  console.log("props", props);

  const { children } = props;

  if (!isLoging) {
    return <LoginPage />;
  }
  return children;
};

export default ProtectRoute;
