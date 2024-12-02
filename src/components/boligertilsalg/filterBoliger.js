"use client";
import { useState, useEffect } from "react";
import classes from "./filterBoliger.module.css";
import { getHomesByType } from "@/lib/apidinmaegler";
export default function FilterBoliger({ onFilterChange }) {
  const [ejendomsData, setEjendomsData] = useState("Ejerlejlighed");
  const [prisInterval, setPrisInterval] = useState([0, 1000000]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let type_eq = "Villa";
  useEffect(() => {
    async function fetchEjendoms() {
      setIsLoading(true);
      const response = await getHomesByType(type_eq);
      if (!response.ok) {
        setError("Failed to fetch ejendoms data");
        setIsLoading(false);
      }
      setIsLoading(false);
      console.log(response);
    }
    fetchEjendoms();
    console.log(ejendomsData);
  }, [ejendomsData]);

  // Handle changes in the filters
  const handleEjendomsDataChange = (e) => {
    const newEjendomsData = e.target.value;
    setEjendomsData(newEjendomsData);
    // Call the parent callback to pass the new filter data
    onFilterChange({ ejendomsData: newEjendomsData, prisInterval });
  };

  const handlePrisIntervalChange = (e) => {
    const newPriceRange = e.target.value.split(",").map(Number);
    setPrisInterval(newPriceRange);
    // Call the parent callback to pass the new filter data
    onFilterChange({ ejendomsData, prisInterval: newPriceRange });
  };

  // function handleForm() {}
  // function handleEjendomsData() {}
  return (
    <>
      <section className={classes.filterboligerSection}>
        <h3 className={classes.heading}>
          <span className={classes.headingFirstWord}>Søg</span> efter dit
          drømmehus
        </h3>
        <form className={classes.form}>
          <p className={classes.formElement}>
            <label id="ejendomstype" className={classes.label}>
              Ejendomstype
            </label>
            <select
              id="ejendomstype"
              name="ejendomstype"
              className={classes.ejendomstype}
              value={ejendomsData}
              onChange={handleEjendomsDataChange}
            >
              <option value="Ejerlejlighed">Ejerlejlighed</option>
              <option value="Villa">Villa</option>
              <option value="Landejendom">Landejendom</option>
              <option value="Byhus">Byhus</option>
            </select>
          </p>
          <p className={classes.formElement}>
            <label className={classes.label}>Pris-interval</label>
            <input
              type="range"
              min="0"
              max="1000000"
              value={prisInterval[0]}
              step="10000"
              name="price"
              list="powers"
              onChange={handlePrisIntervalChange}
            />
            <datalist id="powers">
              <option value="0" />
              <option value="300000" />
              <option value="600000" />
              <option value="1000000" />
            </datalist>
          </p>
        </form>
      </section>

      {/* <section className={classes.filterboligerSection}>
      <h3 className={classes.heading}>
        <span className={classes.headingFirstWord}>Søg</span> efter dit
        drømmehus
      </h3>
      <button onClick={handleEjendomsData}>State lift up</button>
      <form className={classes.form} onChange={handleForm}>
        <p className={classes.formElement}>
          <label id="ejendomstype" className={classes.label}>
            Ejendomstype
          </label>
          <select
            id="ejendomstype"
            name="ejendomstype"
            className={classes.ejendomstype}
          >
            <option value="">Ejendomstype</option>
            <option value="Ejerlejlighed">Ejerlejlighed</option>
            <option value="Villa">Villa</option>
            <option value="Landejendom">Landejendom</option>
            <option value="Byhus">Byhus</option>
          </select>
        </p>
        <p className={classes.formElement}>
          <label className={classes.label}>Pris-interval</label>
          <input
            type="range"
            min="-100"
            max="100"
            value="0"
            step="10"
            name="power"
            list="powers"
          />
          <datalist id="powers">
            <option value="0" />
            <option value="-30" />
            <option value="30" />
            <option value="++50" />
          </datalist>
        </p>
      </form>
    </section> */}
    </>
  );
}
