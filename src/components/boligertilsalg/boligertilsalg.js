import classes from "./boligertilsalg.module.css";
export default function Boligertisalg({ heading, text, children }) {
  return (
    <section className={classes.udvalgteboligersection}>
      <h2 className={classes.heading}>{heading}</h2>
      <p className={classes.text}>{text}</p>
      <section className={classes.children}>{children}</section>
    </section>
  );
}
