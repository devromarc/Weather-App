import React from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const Inputs = () => {
  return (
    <div className=" flex flex-row justify-center my-6">
      <div className=" flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search for the city"
          className=" text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"
        />
        <BsSearch
          size={25}
          className=" text-white cursor-pointer ease-out hover:scale-125"
        />
        <GoLocation
          size={25}
          className=" text-white cursor-pointer ease-out hover:scale-125"
        />
      </div>
      <div className=" flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className=" text-xl text-white font-light">
          °C
        </button>
        <p className=" mx-1 text-white text-xl">|</p>
        <button name="imperial" className=" text-xl text-white font-light">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
