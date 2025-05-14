import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const Update = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const LoadData = async () => {
    const api = "http://localhost:3000/Form";
    const res = await axios.get(api);
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    LoadData();
  }, []);

  const MyDel = async (id) => {
    const api = `http://localhost:3000/Form/${id}`;
    const res = await axios.delete(api);
    console.log(res);
    LoadData();
  };
  const myedit = (id) => {
    navigate(`edit/:${id}`);
  };

  const table = data.map((key) => {
    <tr>[]
      <td>{key.empno}</td>
      <td>{key.city}</td>
      <td>{key.salary}</td>
      <td>{key.age}</td>
     <td>
     <FaRegEdit onClick={()=> {
        myedit(key.id);
     }} />
     </td>
<td>
<MdDelete  onClick={()=> {
        MyDel(key.id);
}}/>

</td>    
    </tr>;
  });

  return (
    <>
      <table border={2} cellPadding={5} cellSpacing={5}>
      <thead
      ></thead>
        <tr>
          <th>Name</th>
          <th>EMpno</th>
          <th>Age</th>
          <th>Salray</th>
        </tr>
        <tbody>{table}</tbody>
      </table>
    </>
  );
};

export default Update;
