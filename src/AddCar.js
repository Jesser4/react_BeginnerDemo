import { useState } from "react";

function AddCar(props) {
  const [name, setName] = useState("");
  const [year, setYear] = useState();
  const [brand, setBrand] = useState("");
  const [champion, setChampion] = useState(false);

  const addCarButtonClick = () => {
    props.addCar({
      name: name,
      year: year,
      brand: brand,
      champion: champion,
    });
    setName("");
    setYear(0);
    setBrand("");
    setChampion(false);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
      <h2>Add a Car</h2>
        </div>
        <div className="row">
        <label for="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /></div>
        <div className="row">
        <label for="year-field">Year:</label>
        <input
          id="year-field"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        /></div>
        <div className="row">
        <label for="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        /></div>
        <label for="champion-field">World Champion:</label>
        <input
          id="champion-field"
          type="checkbox"
          checked={champion}
          onChange={(e) => setChampion(e.target.checked)}
        /></div>
        <div className="row">
          <div className="col-5" />
        <button type="button" className='btn btn-primary col-2' onClick={addCarButtonClick}>
          Add Car
        </button>
        </div>
      </div>
  );
}

export default AddCar;
