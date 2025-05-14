// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavbarDesign from "./NavbarDesign";
// import Layout from "./Layout";
// import Home from "./Homes";
// import Insert from "./Insert";
// import Display from "./Display";
// import Search from "./Search";
// import Update from "./Update";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <NavbarDesign />
//       <Routes>
//         <Route path="/" element={<Layout />}></Route>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/insert" element={<Insert />}></Route>
//         <Route path="/display" element={<Display />}></Route>
//         <Route path="/search" element={<Search />}></Route>
//         <Route path="/update" element={<Update />}></Route>

//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App

// import Authapp from "./AuthApp";
// import UnAuthApp from "./unAuthApp";
// import { useContext } from "react";
// import { myContext } from "./LoginContext";

// const App = () => {
//   const { user } = useContext(myContext);
//   return (
//     <>
//       <h1>Login system</h1>
//       {user.auth ? <Authapp /> : <UnAuthApp />}
//     </>
//   );
// };
// export default App;

// import { useRef } from "react";
// const App = () => {
//   const myRef = useRef("");
//     const myFun = () => {
//       myRef.current.style.color = "red";
//       myRef.current.innerHTMl = "we learn raect js";
//       myRef.current.style.fontSize = "50px";
//       myRef.current.style.textAlign = "center";
//       myRef.current.style.backgroundColor = "black";
//       myRef.current.style.color = "white";
//       myRef.current.style.padding = "20px";
//       myRef.current.style.borderRadius = "200px";
//     };

//   const btn1 = () => {
//     myRef.current.style.color = "red";
//   };
//   const btn2 = () => {
//     myRef.current.style.backgroundColor = "yellow";
//     myRef.current.innerHTMl = "we learn raect js";
//     myRef.current.style.border = "5px solid red";
//     myRef.current.style.borderRadius = "50%";
//     myRef.current.style.width = "150px";
//     myRef.current.style.height = "150px";

//   };
//   const btn3 = () => {
//     myRef.current.style.color = "green";
//   };

//   return (
//     <>
//       <button onClick={myFun}>CLick</button>
//       <button onClick={btn1}>btn1</button>
//       <button onClick={btn2}>btn2</button>
//       <button onClick={btn3}>btn3</button>
//       <h1 ref={myRef}>Login system</h1>
//     </>
//   );
// };

// export default App;

// <**********------------------**********>

// import { useState, useEffect, useRef } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const cntRef = useRef(0); // renamed to match usage

//   useEffect(() => {
//     cntRef.current = cntRef.current + 1;
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <h1>My render count: {cntRef.current}</h1>
//     </div>
//   );
// };

// export default App;
// <**********------------------**********>

// import { useReducer } from "react";

// const App = () => {
//   return (
//     <>
//     <button>Increment</button>
//       <h1>COunt : {}</h1>
//     <button>Decrement</button>
//     </>
//   )
// }

// export default App

// <**********------------------**********>

// <**********---------USEMEMO---------**********>

// import { useState } from "react";
// const App = () => {
//   const [add, setAdd] = useState(0);
//   const [sub, setSub] = useState(100);
//   function mymulti (){
//     console.log("*******");
//     return add * 2;
//   };

//   return (
//     <>
//       <h1>Addition{add} </h1>
//       <button onClick={() => setAdd(add + 1)}>Addition </button>
//       <h1>Subtraction {sub}</h1>
//       <button onClick={() => setSub(sub - 1)}>Subtraction</button>
//       <hr />
//       <h2>Multiplication{mymulti} </h2>
//     </>
//   );
// };
// export default App;

// <**********------------------**********>

// import { useMemo, useState } from "react";

// const App = () => {
//   const [num, setNum] = useState("");
//   const [name, setName] = useState("");
//   const myMulti = useMemo(()=> {
//    for(var i;i<1000000000;i++) {}
//     return num*2;
//   },[num])
//   return (
//     <div>
//       <input
//         type="number"
//         value={num}
//         onChange={(e) => {
//           setNum(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />

//       <h1>My Multiplication {myMulti}</h1>
//     </div>
//   );
// };

// export default App;

// <------------------------------------------------------------->

// import { useState } from "react"; // Only useState is needed now

// const App = () => {
//   const [num, setNum] = useState("");     // State for number input
//   const [name, setName] = useState("");   // State for name input

//   // Expensive calculation runs every render now
//   for (let i = 0; i < 1000000000; i++) {} // Simulating heavy task
//   const myMulti = num * 2;                // Direct multiplication

//   return (
//     <div>
//       <input
//         type="number"
//         value={num}
//         onChange={(e) => setNum(e.target.value)}
//       />

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h1>My Multiplication: {myMulti}</h1>
//     </div>
//   );
// };

// export default App;

// <-------------------------------------->

// import { useState, useEffect, useRef } from "react";

// const App = () => {
//   const [name, setName] = useState("");

//   const cntRef = useRef(0);
//   useEffect(() => {
//     cntRef.current = cntRef.current + 1;
//   });

//   return (
//     <>
//       <input
//         value={name}
//         type="text"
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//     </>
//   );
// };

// export default App;

// useRef is used here because updating it doesn’t cause a re-render.

// If you used useState to track renders, you'd cause an infinite loop because updating state causes re-renders.

// This is a common interview trick question — they want to see if you know when to use useRef vs useState.

// import { useState, useEffect, useRef } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const myRef = useRef();

//   useEffect(() => {
//     myRef.current = myRef.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value)
//         }}
//       />
//         <h1>Count is : {myRef.current}</h1>
//     </>
//   );
// };

// export default App;

//<--------------------------------->

// import { useEffect, useRef, useState } from "react";
// const App = () => {
//   const [name, setName] = useState("");
//   const myRef = useRef(0);
//   useEffect(() => {
//     myRef.current = myRef.current + 1;
//   });

//   return (
//     <>
//       <h1>Name is {name}</h1>
//       <input
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//     </>
//   );
// };

// export default App;





// import { useState } from "react"; // Only useState is needed now

// const App = () => {
//   const [num, setNum] = useState(""); // State for number input
//   const [name, setName] = useState(""); // State for name input

//   // Expensive calculation runs every render now
//   for (let i = 0; i < 1000000000; i++) {} // Simulating heavy task
//   const myMulti = num * 2; // Direct multiplication

//   return (
//     <div>
//       <input
//         type="number"
//         value={num}
//         onChange={(e) => setNum(e.target.value)}
//       />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h1>My Multiplication: {myMulti}</h1>
//     </div>
//   );
// };

// export default App;




// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useState } from "react";

// const Seven = () => {
//   const [input, setInput] = useState({
//     basic: "",
//     ta: "",
//     da: "",
//     hra: "",
//   });

//   const [total, setTotal] = useState(0);
//   const [tax, setTax] = useState(0);
//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setInput((values) => ({ ...values, [name]: value }));
//     console.log(input);
//   };

//   const calculate = (e) => {
//     e.preventDefault();
//     let taxes = 0;
//     const { basic, ta, da, hra } = input;

//     const totalSalary =
//       parseFloat(basic) + parseFloat(ta) + parseFloat(da) + parseFloat(hra);

//     if (totalSalary >= 80000) {
//       taxes = totalSalary * 0.2;
//     } else if (totalSalary >= 50000) {
//       taxes = totalSalary * 0.15;
//     } else if (totalSalary >= 30000) {
//       taxes = totalSalary * 0.1;
//     } else {
//       taxes = 0;
//     }

//     setTotal(totalSalary);
//     setTax(taxes);
//     console.log(total);
//     console.log(tax);
//   };
//   return (
//     <>
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Basic Salary :</Form.Label>
//           <Form.Control
//             type="number"
//             name="basic"
//             value={input.basic}
//             onChange={handleInput}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>TA :</Form.Label>
//           <Form.Control
//             type="number"
//             name="ta"
//             value={input.ta}
//             onChange={handleInput}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>DA:</Form.Label>
//           <Form.Control
//             type="number"
//             name="da"
//             value={input.da}
//             onChange={handleInput}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>HRA :</Form.Label>
//           <Form.Control
//             type="number"
//             name="hra"
//             value={input.hra}
//             onChange={handleInput}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" onClick={calculate}>
//           Calculate Tax on Salary
//         </Button>
//       </Form>

//       <div>
//         <h3>Total Salaray is{total} </h3>
//         <h3>Total Tax is{tax}</h3>
//       </div>
//     </>
//   );
// };
// export default Seven;
