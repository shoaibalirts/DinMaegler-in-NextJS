// app/context/login-context.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies"; // Use nookies for cookies handling

const LoginContext = createContext();

// LoginProvider to manage login state
export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if 'myToken' exists in the cookies when the page is loaded
    const cookies = parseCookies();
    if (cookies.myToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  const login = (token) => {
    setIsLoggedIn(true);
    setCookie(null, "myToken", token, { path: "/" }); // Store the token in cookies
  };

  const logout = () => {
    setIsLoggedIn(false);
    destroyCookie(null, "myToken", { path: "/" }); // Remove the token from cookies
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);

// in this component, i am managing react context value for the login
// step 1: create a context value
// import { createContext } from "react";
// export const LoginContext = createContext({
//   confirmLogin: true,
// }); // yields an object that contains react component
//---------------------------------------------------------------------//
// step 2: provide the context via wrapping the component
// <LoginContext.Provider><Login /></LoginContext.Provider>
//---------------------------------------------------------------------//
// step 3: consume the context value by passing LoginContext object to useContext function
//import { useContext } from "react";
//import { LoginContext } from "@/store/login-context";
// const contaxtValue = useContext(LoginContext);
//---------------------------------------------------------------------//
