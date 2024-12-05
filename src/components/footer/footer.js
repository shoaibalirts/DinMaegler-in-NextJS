// export default function Footer({ children }) {
//   return <footer>{children}</footer>;
// }

import Image from "next/image";
// import CardContact from "./CardContact";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer-grid">
        <div
          className={`first-row
                flex flex-col p-6 gap-6 md:px-[15vw]`}
        >
          <Image
            src="/images/companylogo.svg"
            alt="logo"
            width={300}
            height={60}
            priority
            className="w-40 h-auto"
          />
          <p className="text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
        </div>

        <div className="second-row"></div>

        <div className="third-row"></div>

        <div
          className={`fourth-row
                flex text-white justify-center items-center
                `}
        >
          Layout By Jit Banik 2020
        </div>

        <div
          className={`card-contact
                flex flex-col gap-8 p-6
                sm:flex-row sm:justify-between sm:pb-16 sm:px-[15vw]
                `}
        >
          {/* <CardContact /> */}
          <div className="flex flex-col gap-8 justify-between">
            <nav>
              <h2 className="font-semibold pb-4">Quick Links</h2>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <Link href={"/boligertilsalg"}>Boliger til salg</Link>
                </li>
                <li>
                  <Link href={"/maegler"}>Mæglere</Link>
                </li>
                <li>
                  <Link href={"/contactus"}>Kontakt os</Link>
                </li>
                {/* {!user && ( */}
                <li>
                  <Link href={"/login"}>Log ind / bliv bruger</Link>
                </li>
                {/* )} */}
              </ul>
            </nav>
            <p className="flex flex-col text-sm/4 text-[#7B7B7B]">
              Medlem af
              <span className="text-2xl font-semibold">DMS</span>
              Dansk Mægler Sammenslutning
            </p>
          </div>
        </div>
      </footer>

      {/* <style>
                {`
                    .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 0.5fr 1fr 1fr 0.2fr;
                    position: relative;
                    }
 
                    .first-row {
                    background-color: #F8F8FB;
                    grid-column: 1 / 2;
                    grid-row: 1 / 2;
                    }
 
                    .second-row {
                    background-color: #F8F8FB;
                    grid-column: 1 / 2;
                    grid-row: 2 / 3;
                    }
 
                    .third-row {
                    background-color: white;
                    grid-column: 1 / 2;
                    grid-row: 3 / 4;
                    }
 
                    .fourth-row {
                    grid-column: 1 / 2;
                    grid-row: 4 / 5;
                    background-color: #162A41;
                    }
 
                    .card-contact {
                    grid-column: 1 / 2;
                    grid-row: 2 / 4;
                    z-index: 1;
                    }
                `}
            </style> */}
    </>
  );
}
