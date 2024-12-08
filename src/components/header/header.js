"use client";
import Image from "next/image";
import classes from "./header.module.css";
import Link from "next/link";
import PhoneIcon from "../phoneicon";
import PaperPlaneIcon from "../paperplaneicon";
import PersonIcon from "../personicon";
import { useLogin } from "@/store/login-context";

// consuming context value here because we have to render conditionally based on the login state true or false
// import { useContext } from "react";
// import { LoginContext } from "@/store/login-context";

export default function Header({ children }) {
  // let ctxValue = useContext(LoginContext);
  // console.log("ctx value: ",ctxValue);
  const { isLoggedIn, logout } = useLogin();

  return (
    <header className={classes.header}>
      <section className={classes.layer1}>
        <ul className={classes.unorderedlist}>
          <li className={classes.emailcontainer}>
            <PaperPlaneIcon />
            <p>4000@dinmaegler.dk</p>
          </li>
          <li className={classes.phonecontainer}>
            <PhoneIcon />
            <p>+45 7070 4000</p>
          </li>
        </ul>
        <div className={classes.logincontainer}>
          {isLoggedIn ? (
            
            <button onClick={logout}>Log ud</button>
          ) : (
            <Link href="/login">
              <PersonIcon />
              <p>Log ind</p>
            </Link>
          )}
        </div>
      </section>
      <section className={classes.navigation}>
        <nav className={classes.navbar}>
          <Link href="/" className={classes.logocontainer}>
            <Image
              src="/images/companylogo.svg"
              width={240}
              height={240}
              alt="bolig icon"
            />
          </Link>
          <ul className={classes.headerNavLinks}>
            <li>
              <Link href="/boligertilsalg" className={classes.link}>
                Boliger til salg
              </Link>
            </li>
            <li>
              <Link href="/maegler" className={classes.link}>
                Mæglere
              </Link>
            </li>
            <li>
              <Link href="/favorites" className={classes.link}>
                Mine favoritter
              </Link>
            </li>
            <li>
              <Link href="/contactus" className={classes.link}>
                Kontakt os
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
