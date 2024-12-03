"use client";
import { useState, useEffect } from "react";
import classes from "./filterBoliger.module.css";
import { getHomesByType } from "@/lib/apidinmaegler";
export default function FilterBoliger({ onFilterChange }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [ejendomsData, setEjendomsData] = useState("");
  const [prisInterval, setPrisInterval] = useState([0, 1000000]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchEjendoms() {
      setIsLoading(true);
      const response = await getHomesByType(selectedValue);
      console.log(response);

      if (!response.ok) {
        setError("Failed to fetch ejendoms data");
        setIsLoading(false);
      }
      setIsLoading(false);
      console.log(response);
      onFilterChange(response);
    }
    fetchEjendoms();
    console.log(ejendomsData);
  }, [selectedValue]);

  // function handleForm() {}
  function handleSelected(e) {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
  }

  return (
    <>
      <section className={classes.filterboligerSection}>
        <h3 className={classes.heading}>
          <span className={classes.headingFirstWord}>Søg</span> efter dit
          drømmehus
        </h3>
        <form className={classes.form}>
          <p className={classes.formElement}>
            <label htmlFor="ejendomstype" className={classes.label}>
              Ejendomstype
            </label>
            <select
              id="ejendomstype"
              name="ejendomstype"
              className={classes.ejendomstype}
              value={selectedValue}
              onChange={handleSelected}
            >
              <option value="" defaultValue="">
                Select Ejendoms Type...
              </option>
              <option value="Ejerlejlighed">Ejerlejlighed</option>
              <option value="Villa">Villa</option>
              <option value="Landejendom">Landejendom</option>
              <option value="Byhus">Byhus</option>
            </select>
          </p>

          {/* <p className={classes.formElement}>
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
          </p> */}
        </form>
      </section>
    </>
  );
}
