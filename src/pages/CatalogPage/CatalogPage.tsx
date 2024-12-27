import { useEffect, useState } from "react";
import { LeafletMap } from "./LeafletMap";
import { formatNumber } from "../../utils/formatNumber";
import { Weather } from "./Weather";

type Name = {
  common: string;
  population: number;
  region: string;
};

type Flags = {
  png: string;
  svg: string;
};

export interface CountryProps {
  name: Name;
  flags: Flags;
  language: string;
  latlng: number[];
  population: number;
}

export const CatalogPage = () => {
  const [data, setData] = useState<CountryProps[]>([]);
  const [query, setQuery] = useState<string>("");
  const [filteredArray, setFilteredArray] = useState<CountryProps[]>([]);
  const [countryDetails, setCountryDetails] = useState<CountryProps | null>(
    null
  );

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countries) => {
        setData(countries);
        setFilteredArray(countries);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
        setData([]);
        setFilteredArray([]);
      });
  }, []);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);

    if (value === "") {
      setFilteredArray(data);
    } else {
      const filterByName = data.filter((country) =>
        country.name.common.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredArray(filterByName);
    }
  };

  const totalPopulation = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.population;
  }, 0);

  const handleCountryDetails = (country: CountryProps) => {
    setCountryDetails(country);
  };

  const sortedArray = [...filteredArray].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <section className="flex flex-col w-full p-4">
      <div className="flex w-full gap-4">
        <main className="flex flex-col flex-1 p-2 rounded-lg bg-slate-300">
          <div>
            {filteredArray.length} countries / {formatNumber(totalPopulation)}
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg w-full mb-4"
            onChange={handleQuery}
            value={query}
          />
          <div>
            {sortedArray.map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-2 hover:underline cursor-pointer"
                onClick={() => handleCountryDetails(country)}
              >
                <img
                  className="w-5 h-5"
                  src={country.flags.png}
                  alt={country.name.common}
                  title={country.name.common}
                />
                {country.name.common}
              </div>
            ))}
          </div>
        </main>

        <aside className="flex-1">
          <div className="w-full h-36">
            <LeafletMap data={countryDetails} />
            <Weather data={countryDetails} />
          </div>
        </aside>
      </div>
    </section>
  );
};
