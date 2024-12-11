import classes from "./boligfacts.module.css";
export default function BoligFacts({ boligData }) {
  return (
    <>
      <section className={classes.list}>
        <ul>
          <li className={classes.listitem}>
            <p>Sagsnummer:</p>
            <p>{boligData.id}</p>
          </li>
          <li className={classes.listitem}>
            <p>Boligareal:</p>
            <p>{boligData.livingspace} m²</p>
          </li>
          <li className={classes.listitem}>
            <p>Grundareal:</p>
            <p>{boligData.lotsize} m²</p>
          </li>
          <li className={classes.listitem}>
            <p>Rum/værelser:</p>
            <p>{boligData.rooms}</p>
          </li>
          <li className={classes.listitem}>
            <p>Antal Plan:</p>
            <p>-</p>
          </li>
        </ul>
        <ul>
          <li className={classes.listitem}>
            <p>Kælder:</p>
            <p>-</p>
          </li>
          <li className={classes.listitem}>
            <p>Byggeår:</p>
            <p>{boligData.built}</p>
          </li>
          <li className={classes.listitem}>
            <p>Ombygget:</p>
            <p>{boligData.remodel}</p>
          </li>
          <li className={classes.listitem}>
            <p>Energimærke:</p>
            <p>{boligData.energylabel}</p>
          </li>
        </ul>
        <ul>
          <li className={classes.listitem}>
            <p>udbetaing:</p>
            <p>{boligData.payment}</p>
          </li>
          <li className={classes.listitem}>
            <p>Brutto ex ejerudgift:</p>
            <p>{boligData.gross}</p>
          </li>
          <li className={classes.listitem}>
            <p>Netto ex ejerudgift:</p>
            <p>{boligData.netto}</p>
          </li>
          <li className={classes.listitem}>
            <p>Ejerudgifter:</p>
            <p>{boligData.cost}</p>
          </li>
        </ul>
      </section>
      <section>
        <article>
          <h3>Beskrivelse</h3>
          <p>{boligData.description}</p>
        </article>
        <article></article>
      </section>
    </>
  );
}
