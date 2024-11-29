import classes from "./agentsSection.module.css";
export default function AgentsSection({ children }) {
  return (
    <section className={classes.agentsSection}>
      <h2 className={classes.heading}>Mød vores engagerede medarbejdere</h2>
      <p className={classes.text}>
        Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
        Kontakt en af vores medarbejdere.
      </p>
      <section className={classes.children}>{children}</section>
    </section>
  );
}
