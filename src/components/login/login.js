"use client";
import Link from "next/link";
import Image from "next/image";
import classes from "./login.module.css";
import { useState } from "react";
import { getAuthorization, getCurrentUser } from "@/lib/apidinmaegler";
import { useRouter } from "next/navigation";
import { useLogin } from "@/store/login-context";

export default function Login() {
  const router = useRouter();
  const [enteredValues, setEnteredValues] = useState({
    identifier: "",
    password: "",
  });
  // these two states used for the purpose of updating the UI
  const [isIdentifierInvalid, setIsIdentifierInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const { login } = useLogin();

  async function handleSubmission(e) {
    e.preventDefault();
    console.log("Entered Values: ", enteredValues);

    // form validation logic. if entered values are same as  then we have to execute {login}=
    const validPassword = "123456";

    const data = await getAuthorization(enteredValues);
    console.log("data: ", data); //  success or unsuccessful
    if (
      enteredValues.password !== validPassword ||
      data === "unsuccessfull" ||
      !enteredValues.identifier.includes("@")
    ) {
      setIsIdentifierInvalid(true);
      setIsPasswordInvalid(true);
      return;
    }
    // else if (enteredValues.password !== validPassword) {
    //   setIsPasswordInvalid(true);
    //   return;
    // } else if (data === "unsuccessfull") {
    //   setIsIdentifierInvalid(true);
    //   return;
    // }
    else if (data.myToken) {
      login(data.myToken);
    } else {
      window.location.reload();
    }

    setIsIdentifierInvalid(false);
    setIsPasswordInvalid(false);
  }

  // async function handleCurrentUser(event) {
  //   event.preventDefault();
  //   const currentUser = await getCurrentUser();
  //   console.log("current user data: ", currentUser);
  // }

  function handleInputChange(eventEmitterElement, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [eventEmitterElement]: value,
    }));
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
          Account Logind
        </h2>
      </section>
      <hr />
      <section className={classes.form}>
        <h3 className={classes.formheading}>Log ind på din konto</h3>
        <form onSubmit={handleSubmission}>
          <div>
            <label className={classes.label} htmlFor="identifier">
              Email
            </label>
            <input
              className={classes.input}
              id="identifier"
              type="email"
              name="identifier"
              placeholder="Email"
              onChange={(event) =>
                handleInputChange("identifier", event.target.value)
              }
              value={enteredValues.identifier}
              required
            />
            <div className={classes.errorcontrol}>
              {isIdentifierInvalid && <p>Please enter the correct email!</p>}
            </div>
          </div>
          <div>
            <label className={classes.label} htmlFor="password">
              Password
            </label>
            <input
              className={classes.input}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) =>
                handleInputChange("password", event.target.value)
              }
              value={enteredValues.password}
              required
            />
            <div className={classes.errorcontrol}>
              {isPasswordInvalid && <p>Please enter the correct password!</p>}
            </div>
          </div>
          <p>
            <button className={classes.button}>Log ind</button>
          </p>
          <label>Log ind med </label>
          <div className={classes.socialmediabuttoncontainer}>
            <button className={classes.google}>Google</button>
            <button className={classes.facebook}>Facebook</button>
            <button className={classes.twitter}>Twitter</button>
          </div>
          <div className={classes.opretbruger}>
            <p>Har du ikke en konto?</p>
            <Link href="/register" className={classes.registeruserlink}>Opret bruger.</Link>
          </div>
        </form>
      </section>
    </>
  );
}
