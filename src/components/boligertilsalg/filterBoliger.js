"use client";
import { useState, useEffect } from "react";
import classes from "./filterBoliger.module.css";
import { getHomesByType } from "@/lib/apidinmaegler";
import MultiRangeSlider from "./multirangeslider";
export default function FilterBoliger({ onFilterChange }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [ejendomsData, setEjendomsData] = useState("");
  useEffect(() => {
    async function fetchEjendoms() {
      setIsLoading(true);
      const response = await getHomesByType(selectedValue);
      console.log(response);

      if (!response.ok) {
        setError("Failed to fetch ejendoms data");
      }
      console.log(response);
      onFilterChange(response);
    }
    fetchEjendoms();
    console.log(ejendomsData);
  }, [selectedValue]);

  function handleSelected(e) {
    // console.log(e.target.value);
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

          <p className={classes.formElement}>
            <label className={classes.label}>Pris-interval</label>
            <MultiRangeSlider
              min={0}
              max={12000000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </p>
        </form>
      </section>
    </>
  );
}
