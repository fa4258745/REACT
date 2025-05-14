import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Faculty = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const api = "http://localhost:3000/Form";
    const res = await axios.get(api);
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const ans = data.map((key) => {
    return (
      <>
        <tr>
          <td> {key.empno}</td>
          <td>{key.designation}</td>
          <td> {key.salary}</td>
          <td> {key.department}</td>
        </tr>
        ;
      </>
    );
  });

  return (
    <>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>Empno</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Faculty;
