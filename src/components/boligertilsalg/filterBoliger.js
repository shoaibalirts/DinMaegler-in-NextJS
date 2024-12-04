"use client";
import { useState, useEffect, useRef } from "react";
import classes from "./filterBoliger.module.css";
import { getHomesByType, getHomesByTypeAndPrice } from "@/lib/apidinmaegler";
import MultiRangeSlider from "./multirangeslider";
import * as Slider from "@radix-ui/react-slider";

export default function FilterBoliger({ onFilterChange }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [ejendomsData, setEjendomsData] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(12000000);
  // const [values, setValues] = useState([0, 12000000]);
  // const rangeWidth = 12000000;
  // const ejendomstype = useRef();
  useEffect(() => {
    async function fetchEjendoms() {
      const response = await getHomesByTypeAndPrice(
        selectedValue,
        minPrice,
        maxPrice
      );
      // console.log(response);

      if (!response.ok) {
        // console.log("we have to render page otherwise render error page");
      }
      console.log(response);
      onFilterChange(response);
    }
    fetchEjendoms();
    console.log(ejendomsData);
  }, [selectedValue, minPrice, maxPrice]);

  function handleSelected(e) {
    setSelectedValue(e.target.value);
    // console.log(e.target.value);
    // console.log(ejendomstype.current.value);
    // setSelectedValue(ejendomstype.current.value);
  }

  function handleMinPrice(e) {
    console.log("e: ", e);

    // console.log(e.target.value);
    setMinPrice(e.target.value);
  }
  function handleMaxPrice(e) {
    console.log(e.target.value);
    setMaxPrice(e.target.value);
  }
  function handleValueChange(e) {
    console.log(e);

    setMinPrice(e[0]);
    // setMaxPrice(e[1]);
    // setValues(e.target.value);
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
              // ref={ejendomstype}
            >
              <option value="" defaultValue="">
                Vælg Ejendoms Type...
              </option>
              <option value="Ejerlejlighed">Ejerlejlighed</option>
              <option value="Villa">Villa</option>
              <option value="Landejendom">Landejendom</option>
              <option value="Byhus">Byhus</option>
            </select>
          </p>

          <p className={classes.formElement}>
            <label htmlFor="minPrice" className={classes.label}>
              Min Price
            </label>
            <select
              id="minPrice"
              name="minPrice"
              className={classes.ejendomstype}
              value={minPrice}
              onChange={handleMinPrice}
            >
              <option value="" defaultValue="">
                Vælg Min Price...
              </option>
              <option value="0">0</option>
              <option value="1000000">1000000</option>
              <option value="2000000">2000000</option>
              <option value="3000000">3000000</option>
              <option value="4000000">4000000</option>
              <option value="5000000">5000000</option>
              <option value="6000000">6000000</option>
              <option value="7000000">7000000</option>
              <option value="8000000">8000000</option>
              <option value="9000000">9000000</option>
              <option value="10000000">10000000</option>
              <option value="11000000">11000000</option>
              <option value="12000000">12000000</option>
            </select>
          </p>
          <p className={classes.formElement}>
            <label htmlFor="maxPrice" className={classes.label}>
              Max Price
            </label>
            <select
              id="maxPrice"
              name="maxPrice"
              className={classes.ejendomstype}
              value={maxPrice}
              onChange={handleMaxPrice}
            >
              <option value="" defaultValue="">
                Vælg Max Price...
              </option>

              <option value="1000000">1000000</option>
              <option value="2000000">2000000</option>
              <option value="3000000">3000000</option>
              <option value="4000000">4000000</option>
              <option value="5000000">5000000</option>
              <option value="6000000">6000000</option>
              <option value="7000000">7000000</option>
              <option value="8000000">8000000</option>
              <option value="9000000">9000000</option>
              <option value="10000000">10000000</option>
              <option value="11000000">11000000</option>
              <option value="12000000">12000000</option>
            </select>
          </p>
          {/*           
          <div className="relative w-full px-4">
            <Slider.Root
              onChange={handleValueChange}
              className="relative flex items-center select-none touch-none w-full"
              value={values}
              // onValueChange={handleMinPrice}
              min={0}
              max={rangeWidth}
              step={1000}
              minStepsBetweenThumbs={1000}
              aria-label="Price Range"
            >
              <Slider.Track className="bg-gray-200 relative grow rounded-full h-1.5">
                <Slider.Range className="absolute bg-gray-300 rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-3 h-3 bg-gray-300 rounded-full shadow-lg focus:outline-none" />
              <Slider.Thumb className="block w-3 h-3 bg-gray-300 rounded-full shadow-lg focus:outline-none" />
            </Slider.Root>

            <div className="flex justify-between mt-2 text-sm">
              <span>{Math.floor(values[0]).toLocaleString("da-DK")} kr.</span>
              <span>{Math.floor(values[1]).toLocaleString("da-DK")} kr.</span>
            </div>
          </div> */}

          {/* <Slider defaultValue={[25, 75]} /> */}
          {/* <div>
            <Slider.Root className="w-full h-20">
              <Slider.Track className="h-10 bg-gray-300">
                <Slider.Range className="h-5" />
              </Slider.Track>
              <Slider.Thumb className="h-3 bg-black" />
            </Slider.Root>
          </div> */}
          {/* <div className={`${classes.formElement} ${classes.twowayslider}`}>
            <label className={classes.label}>Pris-interval</label>
            <MultiRangeSlider
              min={0}
              max={12000000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div> */}
        </form>
      </section>
    </>
  );
}
