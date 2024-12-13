"use client";
import classes from "./maeglerdetails.module.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function MaeglerDetails({ agent }) {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    emne: "",
    besked: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const { name, email, emne, besked } = data;

    const newErrors = {
      name: "",
      email: "",
      emne: "",
      besked: "",
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
      });
    }
  }

  return (
    <>
      <div className={classes.twoparts}>
        <div className={classes.topcontainer}>
          <section className={classes.agentinfo}>
            <div className={classes.agentimagecontainer}>
              <Image
                src={agent.image.url}
                width={500}
                height={400}
                priority
                alt={agent.image.name}
              />
            </div>
            <div>
              <h4 className={classes.agentname}>{agent.name}</h4>
              <p>{agent.title}</p>
              <hr className={classes.hr} />
              <div className={classes.phoneandemail}>
                <FaPhoneAlt />
                <p>{agent.phone}</p>
              </div>
              <div className={classes.phoneandemail}>
                <SiMinutemailer />
                <p>{agent.email}</p>
              </div>
            </div>
          </section>

          <article>
            <h3 className={classes.agentname}>Om {agent.name}</h3>
            <p>{agent.description}</p>
          </article>
          {/* <section className={classes.searchcontainer}>
            <h3 className={classes.searchheading}>Search Property</h3>

            <search>
              <form>
                <input name="search" type="text" />
                <button>
                  <CiSearch />
                </button>
              </form>
            </search>
            <div>
              <p>Find The Best Property For Rent Or Buy</p>
              <hr />
              <p>Call Us Now</p>
              <p>+00 123 456 789</p>
            </div>
          </section> */}
        </div>
      </div>
      <section className={classes.form}>
        <form onSubmit={handleSubmit}>
          <h3 className={classes.formheading}>Kontakt Peter Sørensen</h3>
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

          <p>
            <button className={classes.button}>Send besked</button>
          </p>
        </form>
      </section>
    </>
  );
}
