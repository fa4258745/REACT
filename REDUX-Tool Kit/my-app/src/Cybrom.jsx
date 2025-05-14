// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeColor } from "./colorSlice";

// const Cybrom = () => {
//   const color = useSelector((state) => state.color.color);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Welcome</h1>
//       <button onClick={() => dispatch(changeColor())}>Change</button>
//       <div
//         style={{
//           width: "200px",
//           height: "200px",
//           backgroundColor: color,
//           marginTop: "20px",
//         }}>

//       </div>
//     </div>
//   );
// };

// export default Cybrom;

import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";
const Cybrom = () => {
  const clr = useSelector((state) => state.mycolor.color);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome</h1>
      <button
        onClick={() => {
          dispatch(changeColor());
        }}
      >
        CHANGE BG
      </button>
      <div
        style={{ width: "200px", height: "200px", backgroundColor: clr }}
      ></div>
    </>
  );
};
export default Cybrom;
