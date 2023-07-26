import React from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddCar from "./AddCar";
import CarDisplay from "./CarDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addCarToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters} />
      <CarDisplay items={data["items"]} />
      <AddCar addCar={addCarToData} />
    </div>
  );
}

export default App;
