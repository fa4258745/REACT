import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginContextProvider from "./LoginContext.jsx"; // ✅ FIXED

createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <App />
  </LoginContextProvider>
);
