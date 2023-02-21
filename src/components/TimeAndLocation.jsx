import React from "react";
import { formatToLocalTime } from "../services/weatherService";

const TimeAndLocation = ({
  weather: { dt, zone, name, country, cityCombi },
}) => {
  return (
    <div>
      <div className=" flex items-center justify-center my-6">
        <p className=" text-white text-xl font-extralight">
          {/* {const city = country + '/' + name} */}
          {/* {formatToLocalTimeCity(dt, cityCombi)}
          {console.log(formatToLocalTimeCity(dt, cityCombi))} */}
        </p>
      </div>
      <div className=" flex items-center justify-center my-3">
        <p className=" text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
