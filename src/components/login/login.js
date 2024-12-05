import Image from "next/image";
import classes from "./login.module.css";
export default function Login() {
  return (
    <>
      <section className="relative h-[100px] md:h-[120px] flex justify-center items-center">
        <Image
          width={800}
          height={533}
          className={`w-full h-full object-cover absolute inset-0 z-0 ${classes.transparency}`}
          src="/images/nyhedsbrevBuildingBackground.jpg"
          alt="main background heading"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        <h2 className="relative text-white font-semibold text-3xl sm:text-5xl z-10">
          Account Logind
        </h2>
      </section>
      <hr />
      <section className={classes.form}>
        <h3>Log ind på din konto</h3>
        <form></form>
      </section>
    </>
  );
}
