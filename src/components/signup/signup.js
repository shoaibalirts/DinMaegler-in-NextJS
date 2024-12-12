"use client";

import { useState } from "react";
import classes from "./signup.module.css";
import Image from "next/image";

export default function Signup() {
  const [errors, setErrors] = useState({
    fullname: "",
    identifier: "",
    password: "",
    confirmPassword: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const { fullname, identifier, password, confirmPassword } = data;

    const newErrors = {
      fullname: "",
      identifier: "",
      password: "",
      confirmPassword: "",
    };

    // Fullname validation
    if (fullname.trim() === "") {
      newErrors.fullname = "Please enter the full name.";
    } else if (!/^[a-zA-Z\s]+$/.test(fullname)) {
      newErrors.fullname = "Fullname can only contain letters and spaces.";
    }

    // Email validation
    if (identifier.trim() === "") {
      newErrors.identifier = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(identifier)) {
      newErrors.identifier = "Please enter a valid email address.";
    }

    // Password validation
    if (password.trim() === "") {
      newErrors.password = "Password is required.";
    } else if (password.length < 7) {
      newErrors.password = "Password must be at least 7 characters long.";
    }

    // Confirm Password validation
    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Update errors state
    setErrors(newErrors);

    // Check if there are no errors before resetting
    if (Object.values(newErrors).every((msg) => msg === "")) {
      alert("Form submitted successfully!");
      console.log("Your entered data is: ");
      console.log("Fullname: ", fullname);
      console.log("Identifier/Email: ", identifier);
      console.log("Password: ", password);
      console.log("Confirm Password: ", confirmPassword);

      event.target.reset();
      setErrors({
        fullname: "",
        identifier: "",
        password: "",
        confirmPassword: "",
      });
    }
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
        <h3 className={classes.formheading}>Opret bruger hos Din Mægler</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={classes.label} htmlFor="fullname">Fulde navn</label>
            <input className={classes.input}
              id="fullname"
              type="text"
              name="fullname"
              placeholder="Fulde navn"
            />
            <div className={classes.errorcontrol}>
              {errors.fullname && <p>{errors.fullname}</p>}
            </div>
          </div>
          <div>
            <label className={classes.label} htmlFor="identifier">Email</label>
            <input className={classes.input}
              id="identifier"
              type="email"
              name="identifier"
              placeholder="Email"
            />
            <div className={classes.errorcontrol}>
              {errors.identifier && <p>{errors.identifier}</p>}
            </div>
          </div>
          <div>
            <label className={classes.label} htmlFor="password">Password</label>
            <input className={classes.input}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <div className={classes.errorcontrol}>
              {errors.password && <p>{errors.password}</p>}
            </div>
          </div>
          <div>
            <label className={classes.label} htmlFor="confirmPassword">Bekræft password</label>
            <input className={classes.input}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Bekræft password"
            />
            <div className={classes.errorcontrol}>
              {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
          </div>
          <p>
            <button className={classes.button}>Opret bruger</button>
          </p>
        </form>
      </section>
    </>
  );
}
