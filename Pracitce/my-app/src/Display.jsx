import { useState ,useEffect} from "react";
import axios from "axios";
const Insert = () => {
  const [data, setData] = useState([]);

  const LoadData = async () => {
    const api = "http://localhost:3000/Form";
    const res = await axios.get(api);
    console.log(data.res);
    setData(res.data);
  };

      

useEffect(()=> {
 LoadData()
},[])
  let Sno = 0;
  const res = data.map((key) => {
    Sno++;
    return (
      <>
        <tr>
          {Sno}
          <td>{key.name}</td>
          <td>{key.empno}</td>
          <td>{key.age}</td>
          <td>{key.salary}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>#</th>
            <th>Empno</th>
            <th>Salary</th>
            <th>city</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>{res}</tbody>
      </table>
    </>
  );
};

export default Insert;
