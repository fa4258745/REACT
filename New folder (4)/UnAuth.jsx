import { useState, useContext } from "react"; // Importing useState and useContext hooks from React

import { myContext } from "./LoginContext"; // Importing the context we created earlier


const UnAuthApp = () => { // Declaring a functional component named UnAuthApp
  const [txtval, setTxtVal] = useState(""); // Creating a state variable 'txtval' to hold the text input, initialized as an empty string
  const { login } = useContext(myContext); // Extracting the 'login' function from context using useContext hook
  return (
    <>
      Enter name: {/* Label to prompt the user to enter their name */}
      <input
        type="text" // Input field of type text
        value={txtval} // Binding the input value to txtval state
        onChange={(e) => {
          setTxtVal(e.target.value); // Updating txtval whenever user types in the input field
        }}
      />
      
      <button
        onClick={() => {
          login(txtval); // Calling the login function from context with the entered name when button is clicked
        }}>  Login  {/* Button text */} 
          </button>
    </>
  );
};

export default UnAuthApp; // Exporting UnAuthApp so it can be used in other parts of the app
