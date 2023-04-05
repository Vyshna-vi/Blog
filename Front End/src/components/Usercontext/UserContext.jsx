import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState()

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("loggedinuser"))
    console.log("user from localstorage", user);
    setLoggedInUser(user)
  }, [])

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider
