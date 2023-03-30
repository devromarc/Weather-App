import React from "react";
import { WiHumidity, WiWindy, WiSunrise, WiSunset } from "react-icons/wi";
import { TbTemperature } from "react-icons/tb";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { formatToLocalTime, iconUrl } from "../services/weatherService";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunset,
    sunrise,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className=" flex items-center justify-center py-6 text-xl text-gray-600">
        <p>{details}</p>
      </div>
      <div className=" flex flex-row items-center py-3 justify-between text-white">
        <img src={iconUrl(icon)} alt="Weather Icon" className=" w-20"></img>
        <p className=" text-white text-5xl">{`${temp.toFixed()}°`}</p>
        <div className=" flex flex-col space-y-1">
          <div className=" flex font-light text-sm justify-center items-center">
            <TbTemperature size={18} className=" mr-1" />
            Real Fell:
            <span className=" font-medium ml-1">
              {" "}
              {`${feels_like.toFixed()}°`}
            </span>
          </div>
          <div className=" flex font-light text-sm justify-center items-center">
            <WiHumidity size={18} className=" mr-1" />
            Humidity:
            <span className=" font-medium ml-1">
              {" "}
              {`${humidity.toFixed()}%`}
            </span>
          </div>
          <div className=" flex font-light text-sm justify-center items-center">
            <WiWindy size={18} className=" mr-1" />
            Wind:
            <span className=" font-medium ml-1">
              {" "}
              {`${speed.toFixed()}km/hr`}
            </span>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center space-x-2 text-white text-md py-3">
        {/* <WiSunrise />
        <p className=" font-light">
          Rise:{" "}
          <span className=" font-medium ml-1">
            {formatToLocalTimeCity(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className=" font-light">|</p>
        <WiSunset />
        <p className=" font-light">
          Set:{" "}
          <span className=" font-medium ml-1">
            {formatToLocalTimeCity(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className=" font-light">|</p> */}
        <AiOutlineArrowUp />
        <p className=" font-light">
          High: <span className=" font-medium ml-1">{`${temp_max}°`}</span>
        </p>
        <p className=" font-light">|</p>
        <AiOutlineArrowDown />
        <p className=" font-light">
          Low: <span className=" font-medium ml-1">{`${temp_min}°`}</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
