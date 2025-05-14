import { useSelector, useDispatch } from "react-redux";
import { chnageColor } from "./colorSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const [txtval, setTxtval] = useState("");
  const data = useSelector((state) => state.myDark.work);
  console.log(data);

  let sno = 0;

  const ans = data.map((key) => {
    sno++;
    return (
      <>
        <tr>
          <td>{sno}</td>
          <td>{key.task}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <input
        onChange={(e) => {
          setTxtval(e.target.txtval);
        }}
      />

      <button
        onClick={() => {
          dispatch(chnageColor({ task: txtval }));
        }}
      >
        Click
      </button>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Task</td>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default App;