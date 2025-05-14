// import { useState } from "react";
// const App = () => {
//   const [Color, setColor] = useState("purple");
//   return (
//     <>
//       <h1 style={{  color:Color }}>Hello my nam is Faraz {Color} </h1>
//       <button
//         onClick={() => {
//           setColor("yellow");
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// };
// export default App;

// with useContext. REACT





import { useContext } from "react";
import { ColorContext } from "./ColorContext";

const App = () => {
  const { color, setColor } = useContext(ColorContext);
  return (
    <>
      <h1 style={{ color }}>Hello my name is Faraz</h1>
      <button onClick={() => setColor("yellow")}>Click</button>
    </>
  );
};

export default App;