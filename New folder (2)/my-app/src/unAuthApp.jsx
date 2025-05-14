import { useState, useContext } from "react";
import { myContext } from "./LoginContext"; 

const UnAuthApp = () => {
  const [txtval, setTxtVal] = useState("");
  const { login } = useContext(myContext); 
  return (
    <>
      Enter name:
      <input  type="text" value={txtval} onChange={(e) => setTxtVal(e.target.value)} />

      <button onClick={() => login(txtval)}>Login</button>
    </>
  );
};

export default UnAuthApp;