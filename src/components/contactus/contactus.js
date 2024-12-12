"use client";

import Image from "next/image";
import classes from "./contactus.module.css";
import { useState } from "react";
export default function ContactUs() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    emne: "",
    besked: "",
    declaration: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const { name, email, emne, besked, declaration } = data;

    const newErrors = {
      name: "",
      email: "",
      emne: "",
      besked: "",
      declaration: "",
    };

    // Fullname validation
    if (name.trim() === "") {
      newErrors.name = "Please enter the name.";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name can only contain letters and spaces.";
    }

    // Email validation
    if (email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Emne validation
    if (emne.trim() === "") {
      newErrors.emne = "Emne is required.";
    }

    if (besked.trim() === "") {
      newErrors.besked = "Please enter a message.";
    } else if (besked.length < 10) {
      newErrors.besked = "Message must be at least 10 characters long.";
    } else if (besked.length > 500) {
      newErrors.besked = "Message cannot exceed 500 characters.";
    }

    // Declaration validation
    if (!declaration) {
      newErrors.declaration = "Please accept the declaration.";
    }

    // Update errors state
    setErrors(newErrors);

    // Check if there are no errors before resetting
    if (Object.values(newErrors).every((msg) => msg === "")) {
      alert("Form submitted successfully!");
      console.log("Your entered data is: ", data);

      event.target.reset();
      setErrors({
        name: "",
        email: "",
        emne: "",
        besked: "",
        declaration: "",
      });
    }
  }

  return (
    <>
      <section className="relative h-[100px] md:h-[120px] flex justify-center items-center">
        <Image
          width={800}
          height={533}
          decoding="async"
          data-nimg={1}
          className={`w-full h-full object-cover absolute inset-0 z-0 ${classes.transparency}`}
          src="/images/nyhedsbrevBuildingBackground.jpg"
          alt="main background heading"
          // style={"color: transparent"}
        />
        <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        <h2 className="relative text-white font-semibold text-3xl sm:text-5xl z-10">
          Kontakt os
        </h2>
      </section>
      <section>
        <h2>Vi sidder klar til at besvare dine spørgsmål</h2>
        <p>
          Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
          med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage
          til at svare på dine spørgsmål.
        </p>
      </section>
      <section className={classes.form}>
        <form onSubmit={handleSubmit}>
          <div className={classes.nameandemail}>
            <div>
              <label className={classes.label} htmlFor="name">
                Navn
              </label>
              <input
                className={classes.input}
                id="name"
                type="text"
                name="name"
                placeholder="Indtast dit navn"
              />
              <div className={classes.errorcontrol}>
                {errors.name && <p>{errors.name}</p>}
              </div>
            </div>
            <div>
              <label className={classes.label} htmlFor="email">
                Email
              </label>
              <input
                className={classes.input}
                id="email"
                type="email"
                name="email"
                placeholder="Indtast din email"
              />
              <div className={classes.errorcontrol}>
                {errors.email && <p>{errors.email}</p>}
              </div>
            </div>
          </div>
          <div>
            <label className={classes.label} htmlFor="emne">
              Emne
            </label>
            <input
              className={classes.input}
              id="emne"
              type="text"
              name="emne"
              placeholder="Indtast emne"
            />
            <div className={classes.errorcontrol}>
              {errors.emne && <p>{errors.emne}</p>}
            </div>
          </div>
          <div>
            <label className={classes.label} htmlFor="besked">
              Besked
            </label>
            <textarea
              className={classes.textarea}
              id="besked"
              name="besked"
              rows="5"
              cols="33"
              placeholder="Indtast din besked... "
            />

            <div className={classes.errorcontrol}>
              {errors.besked && <p>{errors.besked}</p>}
            </div>
          </div>
          <div>
            <label className={classes.label} htmlFor="declaration">
              <input
                className={classes.label}
                type="checkbox"
                id="declaration"
                name="declaration"
              />
              Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
            </label>
            <div className={classes.errorcontrol}>
              {errors.declaration && <p>{errors.declaration}</p>}
            </div>
          </div>
          <p>
            <button className={classes.button}>Send besked</button>
          </p>
        </form>
      </section>
    </>
  );
}
