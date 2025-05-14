import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
const Update = () => {
  const [input, setInput] = useState([]);
 const navigate=useNavigate();
  const loadData = async () => {
    const api = "http://localhost:3001/Student";
    const res = await axios.get(api);
    console.log(res.data);
    setInput(res.data);
  };

  useEffect(() => {
    loadData();
  });

  const myDel = (id) => {
    const api = ` http://localhost:3001/Student${id}`;
    const res = axios.delete(api);
    loadData();
    console.log(res);
  };
  const myEdit = (id) => {
navigate(`edit/:${id}`)

  };
  const ans = input.map((key) => {
    return (
      <>
        <tr>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.salary}</td>
          
          
          ttttttttttgv v vvgvtt<td>{key.city}</td>
          <td>
            <FaRegEdit
              onClick={() => {
                myEdit(key.id);
              }}
            />
          </td>
          <td>
            <MdDelete
              onClick={() => {
                myDel(key.id);
              }}
            />
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>empno</th>
            <th>city</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};


export default Update; 