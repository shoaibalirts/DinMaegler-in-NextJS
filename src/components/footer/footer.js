import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

import Image from "next/image";
import Link from "next/link";
import classes from "./footer.module.css";
export default function Footer() {
  return (
    <footer className="gap-4 min-h-[50vh] grid grid-cols-[auto,35em,35em,auto] grid-rows-3 bg-gray-100">
      <section className="col-start-2 col-end-4">
        <Link href={"/"}>
          <div className="first-row flex flex-col p-6">
            <Image
              src="/images/companylogo.svg"
              alt="logo"
              width={300}
              height={60}
              priority
              className="w-40 h-auto"
            />
          </div>
        </Link>
        <h2>Din Mægler</h2>

        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
      </section>
      <section className="col-start-3 col-end-4">
        <h2 className={classes.quicklinks}>Quick Links</h2>
        <ul>
          <li>
            <Link href={"/boligertilsalg"}>Boliger til salg</Link>
          </li>
          <li>
            <Link href={"/maegler"}>Mæglere</Link>
          </li>
          <li>
            <Link href={"/contactus"}>Kontakt os</Link>
          </li>
          <li>
            <Link href={"/login"}>Log ind / bliv bruger</Link>
          </li>
        </ul>
      </section>
      <section className="grid grid-cols-2 bg-white row-start-3 row-end-4 col-start-1 col-end-5">
        <div className="col-start-2">
          <p>Medlem af DMS Dansk Mægler Sammenslutning</p>
        </div>
      </section>
      <section className="ml-4 mr-4 mb-4 bg-white row-start-2 row-end-4 col-start-2 col-end-3 shadow-lg">
        <ul>
          <li className={classes.footerRingMailButik}>
            <FaPhoneAlt size={25} />
            <div>
              <p>Ring til os</p>
              <p>+45 7070 4000</p>
            </div>
          </li>
          <li className={classes.footerRingMailButik}>
            <SiMinutemailer size={25} />

            <div>
              <p>Send en mail</p>
              <p>4000@dinmaegler.com</p>
            </div>
          </li>
          <li className={classes.footerRingMailButik}>
            <FiMapPin size={25} />
            <div>
              <p>Butik</p>
              <p>Stændertorvet 78, 4000 Roskilde</p>
            </div>
          </li>
          <p>Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
        </ul>
      </section>
    </footer>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <>
//       <footer className="footer-grid">
//         <div
//           className={`first-row
//                 flex flex-col p-6 gap-6 md:px-[15vw]`}
//         >
//           <Image
//             src="/images/companylogo.svg"
//             alt="logo"
//             width={300}
//             height={60}
//             priority
//             className="w-40 h-auto"
//           />
//           <p className="text-sm">
//             There are many variations of passages of Lorem Ipsum available, but
//             the majority have suffered alteration in some form, by injected
//             humour, or randomised words.
//           </p>
//         </div>

//         <div className="second-row"></div>

//         <div className="third-row"></div>

//         <div
//           className={`fourth-row
//                 flex text-white justify-center items-center
//                 `}
//         >
//           Layout By Jit Banik 2020
//         </div>

//         <div
//           className={`card-contact
//                 flex flex-col gap-8 p-6
//                 sm:flex-row sm:justify-between sm:pb-16 sm:px-[15vw]
//                 `}
//         >
//           <div className="flex flex-col gap-8 justify-between">
//             <nav>
//               <h2 className="font-semibold pb-4">Quick Links</h2>
//               <ul className="flex flex-col gap-2 text-sm">
//                 <li>
//                   <Link href={"/boligertilsalg"}>Boliger til salg</Link>
//                 </li>
//                 <li>
//                   <Link href={"/maegler"}>Mæglere</Link>
//                 </li>
//                 <li>
//                   <Link href={"/contactus"}>Kontakt os</Link>
//                 </li>
//                 <li>
//                   <Link href={"/login"}>Log ind / bliv bruger</Link>
//                 </li>
//               </ul>
//             </nav>
//             <p className="flex flex-col text-sm/4 text-[#7B7B7B]">
//               Medlem af
//               <span className="text-2xl font-semibold">DMS</span>
//               Dansk Mægler Sammenslutning
//             </p>
//           </div>
//         </div>
//       </footer>

//     </>
//   );
// }
