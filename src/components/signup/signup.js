"use client";

import classes from "./signup.module.css";
import Image from "next/image";
export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log("Signup data: ", data);
    event.target.reset();
    console.log("cleared Signup data: ", data);

  }

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
          Account Register
        </h2>
      </section>
      <hr />
      <section className={classes.form}>
        <h3>Opret bruger hos Din Mægler</h3>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="fullname">Fulde navn</label>
            <input
              id="fullname"
              type="text"
              name="fullname"
              placeholder="Fulde navn"
            />
          </p>
          <p>
            <label htmlFor="identifier">Email</label>
            <input
              id="identifier"
              type="email"
              name="identifier"
              placeholder="Email"
            />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </p>
          <p>
            <label htmlFor="confirmPassword">Bekræft password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Bekræft password"
            />
          </p>
          <p>
            <button>Opret bruger</button>
          </p>
        </form>
      </section>
    </>
  );
}
