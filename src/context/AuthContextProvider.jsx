import React, { useState } from "react";
import AuthContext from "./AuthConetxt";
const AuthContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const isLoging = user ? true : false;
  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const values = { user, isLoging, login, logOut };
  return (
    <AuthContext.Provider value={values}> {children}</AuthContext.Provider> // context provider takes all the data you want its like a data storage. and its a high order component so inside of it always have to be another component(children).
  );
};
export default AuthContextProvider;
