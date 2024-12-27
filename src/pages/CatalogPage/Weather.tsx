import { useEffect, useState } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { formatNumber } from "../../utils/formatNumber";

export const Weather = ({ data }: any) => {
  const capital = data?.capital?.[0] ?? "Unknown";
  const population = data?.population ?? 0;
  const officialName = data?.name?.official ?? "Unknown Country";

  const [weather, setWeather] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!API_KEY || capital === "Unknown") {
      console.warn("Missing API key or capital information");
      return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${capital}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((response) => setWeather(response))
      .catch((err) => console.error("API Error:", err));
  }, [capital, API_KEY]);

  if (!capital || capital === "Unknown") {
    return <div>Capital information is not available.</div>;
  }

  return weather === null ? (
    <div>Loading weather data...</div>
  ) : (
    <div className="flex flex-col">
      <div className="flex items-center">Country: {officialName}</div>
      <div>
        Capital: {weather?.location?.name} ({weather?.location?.country})
      </div>
      <div className="flex items-center">
        Temp: {weather?.current?.temp_c}
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
      <div>Population: {formatNumber(population)}</div>
    </div>
  );
};
