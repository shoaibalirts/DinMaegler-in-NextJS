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
    setEnteredValues({
      identifier: "",
      password: "",
    });
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

  async function handleCurrentUser(event) {
    event.preventDefault();
    const currentUser = await getCurrentUser();
    console.log("current user data: ", currentUser);
  }

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
        <h3>Log ind på din konto</h3>
        <form onSubmit={handleSubmission}>
          <div>
            <label htmlFor="identifier">Email</label>
            <input
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
            <div>
              {isIdentifierInvalid && <p>Please enter the correct email!</p>}
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
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
            <div>
              {isPasswordInvalid && <p>Please enter the correct password!</p>}
            </div>
          </div>
          <p>
            <button>Log ind</button>
          </p>
        </form>
      </section>
      <section>
        <button>Google</button>
        <button>Facebook</button>
        <button>Twitter</button>
      </section>
      <section>
        <p>Har du ikke en konto?</p>
        <Link href="/register">Opret bruger.</Link>
      </section>
      {/* <button onClick={handleCurrentUser}>Current User</button> */}
    </>
  );
}
