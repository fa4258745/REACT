// import { useState } from "react";
// import { useMemo } from "react";
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   const memoizedValue = useMemo  (() =>{
//     for (let i = 0; i < 1000000000; i++) {
//       // Simulate a heavy computation
//   }
//     setCount(count + 1);
//     return count * 2;
//   });

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleClick}>Increment</button>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>Memoized Value: {memoizedValue}</p>
//     </div>
//   );
// };
// export default App;

// // UserContext.jsx

// import { createContext, useState } from "react";

// const myuserContext = createContext();

// const UserContext = ({ children }) => {
//   const [user, setUser] = useState("Rahul");
//   return (
//     <>
//       <myuserContext.Provider value={{ user, setUser }}>
//         {children}
//       </myuserContext.Provider>
//     </>
//   );
// };

// export default UserContext;
// export { myuserContext};

// // <--------------------------------------->

// import { increment, decrement } from "./counterSlice";
// import { useSelector, useDispatch } from "react-redux";

// import Cybrom from "./Cybrom";
// const App = () => {
//   const mycnt = useSelector((state) => state.mycounter.count);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <h1>My COunter</h1>
//       <button
//         onClick={() => {
//           dispatch(increment());
//         }}
//       >
//         increment
//       </button>
//       <h1>{mycnt}</h1>
//       <button
//         onClick={() => {
//           dispatch(decrement());
//         }}
//       >
//         decrement
//       </button>

// <Cybrom />

//     </>
//   );
// };
// export default App;

// // <--------------COLOR APP---------------->

// import Cybrom from "./Cybrom";
// const App = () => {
//   return (
//     <>
//       <Cybrom />
//     </>
//   );
// };
// export default App;

// // <--------------Name CHanging---------------->

// import { useSelector, useDispatch } from "react-redux"
// import { changeName } from "./colorSlice";
// const App = () => {
//   const usrname = useSelector(state => state.myname.user)
//   const dispatch = useDispatch()
//   return (
//     <>
//       <h1>Welcome {usrname}</h1>
//       <button onClick={()=>{dispatch(changeName())}}>CLICK HERE</button>
//     </>
//   )
// };

// export default App;

// cartSlice.js

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addItem, removeItem, clearCart } from "./colorSlice";

// const App = () => {
//   const dispatch = useDispatch();
//   const { items, total } = useSelector(state => state.cart);

//   const [counter, setCounter] = useState(1);

//   const handleAdd = () => {
//     const product = {
//       id: counter, // stable id
//       name: "Laptop",
//       price: 1000
//     };
//     dispatch(addItem(product));
//     setCounter(prev => prev + 1); // ensure next product has a new ID
//   };

//   return (
//     <div>
//       <h2>🛒 Shopping Cart</h2>
//       <button onClick={handleAdd}>Add Laptop</button>
//       <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} - ₹{item.price}
//             <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <h4>Total: ₹{total}</h4>
//     </div>
//   );
// };

// export default App;

// <---------PAYLOAD-------->

// import { useSelector, useDispatch } from "react-redux";
// import { changeColor } from "./colorSlice";
// import { useState } from "react";
// const App = () => {

//   // const clr = useSelector((state) => state.mycolor.color);
//   const dispatch = useDispatch();
//   const [txtval, setTxtval] = useState("");
//   const data = useSelector((state) => state.mydark.work);
//   console.log(data);
//   let Sno=0;
//   const ans = data.map((key) => {
//     Sno++;
//     return (
//       <>
//         <tr>
//         <td>{Sno}</td>
//           <td>{key.task}</td>
//         </tr>
//       </>
//     );
//   });

//   return (
//     <>
//       <h1>Welcome</h1>
//       <input
//         onChange={(e) => {
//           setTxtval(e.target.value);
//         }}
//       />

//       <button
//         onClick={() => {
//           dispatch(changeColor({task:txtval}));
//         }}
//       >
//         Change color
//       </button>
//       <hr />

//       {/* <div
//         style={{ width: "200px", height: "200px", backgroundColor: clr }}
//       ></div> */}

//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Task</th>
//           </tr>
//         </thead>
//         <tbody>{ans}</tbody>
//       </table>
//     </>
//   );
// };

// export default App;

// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTask, removeTask, removeIdxTask } from "./todoSlice";

// const App = () => {
//   const [val, setVal] = useState("");
//   const data = useSelector((state) => state.todo.task);
//   console.log(data);
//   const dispatch = useDispatch();
//   let sno = 0;
//   const ans = data.map((key, index) => {
//     sno++;
//     return (
//       <>
//         <tr>
//           <td>{sno}</td>
//           <td>{key.work}</td>
//           <td>
//             <button
//               onClick={() => {
//                 dispatch(removeTask({ id: key.id }));
//               }}
//             >
//               Delete
//             </button>
//           </td>

//           <td>
//             <button
//               onClick={() => {
//                 dispatch(removeIdxTask({ id: index }));
//               }}
//             >
//               Click
//             </button>
//           </td>
//         </tr>
//       </>
//     );
//   });

//   return (
//     <>
//       <h1>Welcome TO DO App</h1>
//       Enter Task :
//       <input
//         type="text"
//         value={val}
//         onChange={(e) => {
//           setVal(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           dispatch(addTask({ id: Date.now(), work: val }));
//         }}
//       >
//         Add
//       </button>
//       <hr />
//       <table>
//         <tr>
//           <th>Sno</th>
//           <th>Task</th>
//         </tr>
//         {ans}
//       </table>
//     </>
//   );
// };

// export default App;

// <---------------------->

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  removeTask,
  completeTask,
  IncompleteTask,
  editDataSave,
} from "./todoSlice";

const App = () => {
  const [txtval, setTxtval] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);
  const [myid, setMyid] = useState("");
  const Data = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();
  console.log(Data);

  const myEdit = (id, work) => {
    setTxtval(work);
    setBtnStatus(false);
    setMyid(id);
  };

  const myeditSave = () => {
    dispatch(editDataSave({ id: myid, work: txtval }));
    setBtnStatus(true);
  };
  
  let sno = 0;
  const ans = Data.map((key, index) => {
    sno++;
    return (
      <>
        <tr>
          <td> {sno}</td>
          <td>
            {key.status ? (
              <>
                <span style={{ color: "red", textDecoration: " line-through" }}>
                  {" "}
                  {key.work}
                </span>
              </>
            ) : (
              <>{key.work}</>
            )}
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(removeTask({ id: key.id }));
              }}
            >
              Del
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(completeTask({ id: key.id }));
              }}
            >
              {" "}
              Complete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(IncompleteTask({ id: key.id }));
              }}
            >
              {" "}
              UnComplete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                myEdit(key.id, key.work);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h1>Welcome to tudu App!</h1>
      Enter :{" "}
      <input
        type="text"
        value={txtval}
        onChange={(e) => {
          setTxtval(e.target.value);
        }}
      />
      {btnStatus ? (
        <>
          <button
            onClick={() => {
              dispatch(
                addTask({ id: Date.now(), work: txtval, status: false })
              );
            }} >
            Add{" "}
          </button>
        </>
      ) : (
        <>
          <button onClick={myeditSave}>Edit Save</button>
        </>
      )}
      <hr />
      <table>
        <tr>
          <th> Sno</th>
          <th> Work </th>
          <th></th>
          <th> </th>
          <th> </th>
          <th></th>
        </tr>
         {ans}
      </table>
    </>
  );
};
export default App;
