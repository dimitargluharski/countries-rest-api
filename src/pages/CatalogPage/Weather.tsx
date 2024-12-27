import { useEffect, useState } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { formatNumber } from "../../utils/formatNumber";

export const Weather = ({ data }: any) => {
  const capital = data?.capital[0] ?? "";
  const population = data?.population ?? 0;
  const officialName = data?.name?.official ?? "";

  const [weather, setWeather] = useState();
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${capital}`;
    fetch(url)
      .then((data) => data.json())
      .then((response) => setWeather(response))
      .catch((err) => console.log("error", err));
  }, [capital]);

  return weather === undefined ? (
    "N/A"
  ) : (
    <div className="flex flex-col">
      <div className="flex items-center">Country: {officialName}</div>
      <div>
        Capital: {weather?.location?.name} ({weather.location?.country})
      </div>

      <div className="flex items-center">
        temp: {weather?.current?.temp_c}
        <TbTemperatureCelsius className="h-5 w-5" />
      </div>

      <div className="flex items-center">
        {weather?.current?.condition?.text}

        <img
          className="w-8 h-8"
          src={weather?.current?.condition?.icon}
          alt={weather?.current?.condition?.text}
        />
      </div>

      <div>population: {formatNumber(population)}</div>
    </div>
  );
};
