const API_KEY = "b24bded7c8667df0d4ccc6f8b4b482c4";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
import { DateTime } from "luxon";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    timezone,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  const cityCombi = country + "/" + name;

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    sunrise,
    sunset,
    country,
    details,
    icon,
    speed,
    timezone,
    cityCombi,
  };
};

const formatForecastWeather = (data) => {
  let { city, list } = data;

  list = list.slice(0, 5).map((d) => {
    return {
      title: formatToLocalTime(d.dt, city.timezone, "hh:mm a"),
      temp: d.main.temp,
      icon: d.weather[0].icon,
    };
  });
  return { city, list };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  // console.log(searchParams);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForcastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then(formatForecastWeather);

  // return { ...formattedCurrentWeather };

  return { ...formattedCurrentWeather, ...formattedForcastWeather };
};

// const formatToLocalTime = (
//   secs,
//   zone,
//   format = "cccc, LLL dd yyyy '| Local Time:' hh:mm a"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatToLocalTime = (
  secs,
  getzone,
  format = "cccc, dd LLL yyyy' | ' hh:mm a"
) => DateTime.fromSeconds(secs).setZone(getzone).toFormat(format);

const formatToLocalTimeCity = (secs, getzone) =>
  DateTime.fromSeconds(secs, { getzone }).toFormat("hh:mm a");

const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrl, formatToLocalTimeCity };
