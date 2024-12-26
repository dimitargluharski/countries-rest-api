import { useEffect, useState } from "react";
import { formatNumber } from "../../utils/formatNumber";

type Name = {
  common: string;
  population: number;
  region: string;
};

type Flags = {
  png: string;
  svg: string;
};

interface CountryProps {
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

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((response) => {
        setData(response);
        setFilteredArray(response);
      })
      .catch((err) => console.log("error", err));
  }, []);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);

    if (value === "") {
      setFilteredArray(data);
    }

    const filterByName = data.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredArray(filterByName);
  };

  const totalPopulation = data.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.population);
  }, 0);

  return (
    <section className="flex flex-col w-full p-4">
      <div className="flex w-full gap-4">
        <main className="flex flex-col flex-1 p-2 rounded-lg bg-slate-300">
          {filteredArray.length} countries / {formatNumber(totalPopulation)}{" "}
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg"
            onChange={handleQuery}
            value={query}
          />
          <div>
            {filteredArray.map((c, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-2 hover:underline cursor-pointer"
              >
                <img
                  className="w-5 h-5"
                  src={c.flags.png}
                  alt={c.name.common}
                  title={c.name.common}
                />
                <div>{c.name.common}</div>
              </div>
            ))}
          </div>
        </main>
        <aside className="flex-1">
          <h2>Details</h2>

          <div></div>
        </aside>
      </div>
    </section>
  );
};
