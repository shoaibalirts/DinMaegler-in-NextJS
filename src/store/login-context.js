"use client";
import { useRouter } from "next/navigation";

import { createContext, useContext, useState, useEffect } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies"; 

const LoginContext = createContext();

// LoginProvider to manage login state
export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if 'myToken' exists in the cookies when the page is loaded
    const cookies = parseCookies();
    if (cookies.myToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login = (token) => {
    setIsLoggedIn(true);
    setCookie(null, "myToken", token, { path: "/" }); // Store the token in cookies
    router.push("/boligertilsalg");

  };

  const logout = () => {
    let confirmLogout = confirm("Er du sikkert at logge ud?");
    if (confirmLogout) {
      setIsLoggedIn(false);
      destroyCookie(null, "myToken", { path: "/" }); // Remove the token from cookies
      destroyCookie(null, "userId", { path: "/" }); // Remove the token from cookies

      router.push("/login");

    }
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);

// in this component, i am managing react context value for the login, logout
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
