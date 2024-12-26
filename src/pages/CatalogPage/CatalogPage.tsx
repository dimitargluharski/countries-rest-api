import { useState } from "react";

const data = [
  { id: 1, vote: 3, title: "hello universe", rate: 4, like: true },
  { id: 2, vote: 5, title: "goodbye moon", rate: 2, like: false },
  { id: 3, vote: 7, title: "space adventures", rate: 3, like: true },
  { id: 4, vote: 12, title: "sunrise and sunset", rate: 5, like: false },
  { id: 5, vote: 0, title: "twilight zone", rate: 1, like: true },
  { id: 6, vote: 8, title: "starry night", rate: 4, like: true },
  { id: 7, vote: 2, title: "moonlit dreams", rate: 2, like: false },
  { id: 8, vote: 15, title: "galaxy far away", rate: 5, like: true },
  { id: 9, vote: 6, title: "cosmic wonder", rate: 3, like: false },
  { id: 10, vote: 9, title: "astronomical science", rate: 4, like: true },
  { id: 11, vote: 4, title: "space exploration", rate: 4, like: false },
  { id: 12, vote: 10, title: "black hole mysteries", rate: 5, like: true },
  { id: 13, vote: 3, title: "light speed", rate: 3, like: false },
  { id: 14, vote: 1, title: "alien encounters", rate: 2, like: true },
  { id: 15, vote: 11, title: "nebula glow", rate: 5, like: false },
];

export const CatalogPage = () => {
  const [selected, setSelected] = useState(false);
  const [details, showDetails] = useState<DataObjectProps | null>(null);
  const [query, setQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<DataObjectProps[]>(data);

  const options = ["vote", "title", "rate"];

  interface DataObjectProps {
    id: number;
    vote: number;
    title: string;
    rate: number;
    like: boolean;
  }

  const handleViewDetails = (dataObject: DataObjectProps) => {
    showDetails(dataObject);
    setSelected(!selected);
  };

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const queryValue = event.target.value;
    setQuery(queryValue);

    const filteredArray = data.filter((q) =>
      q.title.toLowerCase().includes(queryValue.toLowerCase())
    );

    setFilteredData(filteredArray);
  };

  return (
    <section className="flex flex-col w-full p-4">
      <div className="flex w-full gap-4">
        <main className="flex flex-col flex-1 p-2 rounded-lg bg-slate-300">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg"
            onChange={handleQuery}
            value={query}
          />

          <div>
            <div className="flex items-center justify-between py-2">
              <div>Results: {filteredData.length}</div>

              <select name="dropdownOptions" id="options" className="p-2">
                {options.map((option, index) => (
                  <option value="" key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {filteredData.map((d, index) => (
              <div
                key={index}
                onClick={() => handleViewDetails(d)}
                className="hover:bg-slate-100"
              >
                {d.title}
              </div>
            ))}
          </div>
        </main>

        {
          // show aside section for two reasons:
          // compare offers
          // view more details about the specific offer
          selected ? (
            <aside className="flex-1 rounded-lg p-2 bg-slate-300">
              <h2>Details:</h2>
              <div>Title: {details && details?.title}</div>
              <div>Rate: {details?.rate} star </div>
            </aside>
          ) : null
        }
      </div>

      {/* recomended section */}
      <div>
        <div>Recomended for you:</div>
        <div className="flex">
          {filteredData.map((d, index) => (
            <div key={index}>{d.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
