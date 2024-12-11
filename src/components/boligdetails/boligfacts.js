import Image from "next/image";
import Link from "next/link";
import classes from "./boligfacts.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

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
      <Link href={`/maegler/${boligData.agent.id}`}>
        <section className={classes.boligdescriptionandansvarligeagent}>
          <article className={classes.boligdescription}>
            <h3 className={classes.heading}>Beskrivelse</h3>
            <p>{boligData.description}</p>
          </article>
          <article className={classes.ansvarligeagent}>
            <h3 className={classes.heading}>Ansvalig mægler </h3>
            <section className={classes.agentinfo}>
              <div className={classes.agentimagecontainer}>
                <Image
                  src={boligData.agent.image.url}
                  width={500}
                  height={400}
                  priority
                  alt={boligData.agent.image.name}
                />
              </div>
              <div>
                <h4>{boligData.agent.name}</h4>
                <p>{boligData.agent.title}</p>
                <hr className={classes.hr} />
                <div className={classes.phoneandemail}>
                  <FaPhoneAlt />
                  <p>{boligData.agent.phone}</p>
                </div>
                <div className={classes.phoneandemail}>
                  <SiMinutemailer />
                  <p>{boligData.agent.email}</p>
                </div>
              </div>
            </section>
          </article>
        </section>
      </Link>
    </>
  );
}
