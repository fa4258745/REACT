// import {useSelector,useDispatch} from "react-redux";
// import {changeName} from "./Slice";

// const App=()=> {
//   const username = useSelector(state=> state.myname.user)
//    const dispatch = useDispatch()
//    return(
//     <>
//       <h1>Welcome {username}</h1>
//       <button onClick={()=> {
//         dispatch(changeName())
//       }}>CLICK HERE</button>
//     </>
//    )
// }

// export default App;

// import { useSelector, useDispatch } from "react-redux";

// import { changeName } from "./Slice";

// const App = () => {
//   const userName = useSelector((state) => state.myname.user);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <h1>Welcome{userName}</h1>
//       <button onClick={() => dispatch(changeName())}>CLICK</button>
//     </>
//   );
// };

// export default App;


import { useSelector, useDispatch } from "react-redux";
import { incrementBy } from "./Slice";
import { useState } from "react";
const App = () => {
  const [input, setInput] = useState("");
  const inpadd = useSelector((state) => state.usrinput.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{inpadd}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementBy(input));
        }}
      >
        CLICK TO SUBMIT
      </button>
   
   
    </>
  );
};
export default App;
