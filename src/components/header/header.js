import Image from "next/image";
import classes from "./header.module.css";
import Link from "next/link";
import PhoneIcon from "../phoneicon";
import PaperPlaneIcon from "../paperplaneicon";
import PersonIcon from "../personicon";
export default function Header({ children }) {
  function handlerLogin() {
    console.log("clicked");
  }
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
        <Link href="/login" className={classes.logincontainer}>
          <PersonIcon />
          <p>Log ind</p>
        </Link>
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
              <Link href="/propertylist" className={classes.link}>
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
