import classes from "./agentsSection.module.css";
export default function AgentsSection({ children }) {
  return (
    <section className={classes.agentsSection}>
      <section className={classes.children}>{children}</section>
    </section>
  );
}
