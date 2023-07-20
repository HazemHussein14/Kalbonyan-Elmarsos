import React, { useState, useEffect } from "react";

const Authcontext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogIn: (email, password) => {
  },
});

export const AuthcontextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logUesrInfo = localStorage.getItem("isLoggedIn");

    if (logUesrInfo === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const logInHandler = () => {
    localStorage.setItem("isLoggedIn", "LOGGED_IN");
    setIsLoggedIn(true);
  };

  return (
    <Authcontext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogIn: logInHandler,
      }}
    >
      {props.children}
    </Authcontext.Provider>
  );
};

export default Authcontext;
