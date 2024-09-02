import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const MakeDropDown = () => {
  const [selectedCountry, setSelectedCountry] = useState("pk");
  const countries = [
    { name: "Pakistan", value: "pk", cities: ["Karachi", "Lahore", "Multan"] },
    { name: "Phalisteen", value: "ph", cities: ["Bait al Mukadas", "Ghaza"] },
  ];

  return (
    <Fragment>
      <h3>1. Make dynamic Dropdown</h3>
      <div>On Change Country, change the values of Cities </div>
      <div>
        Countries
        <select onChange={(e) => setSelectedCountry(e.target.value)}>
          {countries.map((country) => (
            <option
              selected={country.value == "pk" ? true : false}
              value={country.value}
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        Cities
        <select>
          {countries.map((country) => {
            if (country.value == selectedCountry)
              return country.cities.map((city) => <option>{city}</option>);
          })}
        </select>
      </div>
    </Fragment>
  );
};
export default MakeDropDown;
