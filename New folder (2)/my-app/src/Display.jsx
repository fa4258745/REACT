import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Display = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const api = "http://localhost:3001/Student";
    const res = await axios.get(api);
    console.log(res.data);
    setData(res.data)
  };

  useEffect(() => {
    loadData();
  },[]);

  let Sno = 0;
  const ans = data.map((key) => {
    Sno++;
    return (
      <>
        <tr>
          <td>{Sno}</td>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.salary}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1>Display Page</h1>
      <Table striped bordered hover>
        <tr>
        <th>#</th>
          <th>Empno</th>
          <th>Name</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
        <thead>
        </thead>
        <tbody>{ans}</tbody>
      </Table>

    </>
  );
};

export default Display;


