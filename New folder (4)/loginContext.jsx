import { createContext, useState } from "react"; // Importing createContext and useState hooks from React

const myContext = createContext(); // Creating a new context called myContext

const LoginContextProvider = ({ children }) => { // Creating a context provider component that takes children as props
  const [user, setUser] = useState({ name: "", auth: false }); // Initializing state 'user' with default values (name is empty and not authenticated)

  const login = (nm) => { // Defining login function that takes a name as argument
    setUser({ name: nm, auth: true }); // Updates user state with name and sets auth to true
  };

  const logout = () => { // Defining logout function
    setUser({ name: "", auth: false }); // Resets user state to default (empty name and not authenticated)
  };

  return (
    <myContext.Provider value={{ user, login, logout }}> {/* Providing user state and login/logout functions to all children components */}
      {children} {/* Rendering children components inside the provider */}
    </myContext.Provider>
  );
};

export default LoginContextProvider; // Exporting the provider component as default export
export { myContext }; // Exporting the context separately so it can be used with useContext hook
