import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    const api = `http://localhost:3001/Student/?name${name}`;
    const response = await axios.get(api);
    console.log(response.data);
    setData(response.data);
  };

  const ans = data.map((key) => {
    return (
      <>
        <h3>{key.name}</h3>
        <h3>{key.empno}</h3>
        <h3>{key.city}</h3>
        <h3>{key.salary}</h3>
      </>
    );
  });
  return (
    <>
      <h1>Search Page</h1>
      Enter{" "}
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Search</button>
      <div>{ans}</div>
    </>
  );
};

export default Search;



// multiple array of object {}
// single array
