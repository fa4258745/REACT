import { useState } from "react";
import axios from "axios";
const Insert = () => {
  const [name, setEmpno] = useState("");
  const [data, Setdata] = useState([]);

  const LoadData = async () => {
    const api = `http://localhost:3000/Form/?name=${name}`;
    const res = await axios.get(api);
    console.log(res.data);
    Setdata(res.data);
  };

  const res = data.map((key) => {
    return (
      <>
        <h3>{key.name}</h3>
        <h3>{key.name}</h3>
        <h3>{key.age}</h3>
        <h3>{key.salary}</h3>
      </>
    );
  });

  return (
    <>
      <h1>Searcjh</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setEmpno(e.target.value);
        }}
      />
      <button onClick={LoadData}>SEARCH DATA </button>
      <div>{res}</div>
    </>
  );
};

export default Insert;
