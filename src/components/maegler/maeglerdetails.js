"use client";
import classes from "./maeglerdetails.module.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { CiSearch } from "react-icons/ci";

import ContactForm from "../utils/contactform";
export default function MaeglerDetails({ agent }) {
  return (
    <div className={classes.twoparts}>
      <div>
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
            <h4>{agent.name}</h4>
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
          <h3>Om {agent.name}</h3>
          <p>{agent.description}</p>
        </article>

        <ContactForm agentheading={agent.name} />
      </div>
      <section className={classes.searchcontainer}>
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
      </section>
    </div>
  );
}
