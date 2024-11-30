import classes from "./agentsSection.module.css";
export default function AgentsSection({ heading, text, children }) {
  return (
    <section className={classes.agentsSection}>
      <h2 className={classes.heading}>{heading}</h2>
      <p className={classes.text}>{text}</p>
      <section className={classes.children}>{children}</section>
    </section>
  );
}
