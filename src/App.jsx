import React, { useState, useEffect } from "react";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "manila" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        }
      );
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className=" mx-auto max-w-screen-sm mt-4 py-5 px-32 bg-gradient-to-br from-cyan-200 to-blue-700 h-fit shadow-xl shadow-gray-500">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="3 Hour Forecast Data" items={weather.list} />
        </>
      )}
    </div>
  );
};

export default App;
