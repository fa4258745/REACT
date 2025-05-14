import { useContext } from "react";
import { myContext } from "./LoginContext";

const AuthApp = () => {
  const { user, logout } = useContext(myContext);
  return (
    <>
      <h2>Welcome {user.name}</h2>
      <button
        onClick={() => {
          logout();
        }}
      >           
        Logout
      </button>
    </>
  );
};

export default AuthApp;
