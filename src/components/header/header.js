import Image from "next/image";
import classes from "./header.module.css";
import Link from "next/link";
export default function Header({ children }) {
  return (
    <header className={classes.header}>
      <section className={classes.layer1}>
        <ul className={classes.unorderedlist}>
          <li className={classes.emailcontainer}>
            <Image
              className={classes.svgicon}
              src="/images/paperplane.svg"
              width={20}
              height={20}
              alt="paper plane icon"
            />
            <p>4000@dinmaegler.dk</p>
          </li>
          <li className={classes.phonecontainer}>
            <Image
              className={classes.svgicon}
              src="/images/phoneicon.svg"
              width={20}
              height={20}
              alt="phone icon"
            />
            <p>+45 7070 4000</p>
          </li>
        </ul>
        <ul>
          <li className={classes.logincontainer}>
            <Image
              className={classes.svgicon}
              src="/images/personicon.svg"
              width={20}
              height={20}
              alt="person icon"
            />
            <p>Log ind</p>
          </li>
        </ul>
      </section>
      <section className={classes.navigation}>
        <nav className={classes.navbar}>
          <Link href="/" className={classes.logocontainer}>
            <Image
              src="/images/house.svg"
              width={60}
              height={60}
              alt="bolig icon"
            />
            <p className={classes.logo}>DIN MÆGLER</p>
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
