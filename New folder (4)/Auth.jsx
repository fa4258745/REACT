import { useContext } from "react"; // Importing useContext hook from React
import { myContext } from "./LoginContext"; // Importing the context we created earlier

const AuthApp = () => { // Declaring a functional component named AuthApp
  const { user, logout } = useContext(myContext); // Extracting 'user' object and 'logout' function from context
  return (
    <>
      <h2>Welcome {user.name}</h2> {/* Displaying a welcome message with the user's name */}
      <button
        onClick={() => {
          logout(); // Calling logout function when button is clicked to log the user out
        }}
      >
        CLick here {/* Button text */}
      </button>
    </>
  );
};

export default AuthApp; // Exporting AuthApp so it can be used in other parts of the app
