import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleUnitsChange = (e) => {
    const selectedUnits = e.currentTarget.name;
    if (units !== selectedUnits) setUnits(selectedUnits);
  };

  return (
    <div className=" flex flex-row justify-center my-6">
      <div className=" flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search for the city"
          className=" text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"
        />

        <BsSearch
          size={25}
          className=" text-white cursor-pointer ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
      </div>
      <div className=" flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className=" text-xl text-white font-light hover:scale-125 transision ease-out"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className=" mx-1 text-white text-xl">|</p>
        <button
          name="imperial"
          className=" text-xl text-white font-light hover:scale-125 transision ease-out"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
