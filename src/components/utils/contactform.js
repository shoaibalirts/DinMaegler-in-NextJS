import classes from "./contactform.module.css";
export default function ContactForm({ agentheading }) {
  function handleSubmission() {}
  return (
    <section className={classes.form}>
      <h3>Kontakt {agentheading}</h3>

      <form onSubmit={handleSubmission}>
        <p>
          <label htmlFor="name">Navn</label>
          <input id="name" type="text" name="name" placeholder="Indtast navn" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Indtast email"
          />
        </p>
        <p>
          <label htmlFor="emne">Emne</label>
          <input
            id="emne"
            type="text"
            name="emne"
            placeholder="Hvad drejer din henvendelse sig om?"
          />
        </p>
        <p>
          <label htmlFor="besked">Besked</label>
          <input
            id="besked"
            type="text"
            name="besked"
            placeholder="Skriv din besked her..."
          />
        </p>
        <p>
          <button>Send besked</button>
        </p>
      </form>
    </section>
  );
}
