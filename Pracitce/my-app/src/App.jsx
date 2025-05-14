import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Navbar from "./Navbar";
import Display from "./Display";
import Search from "./Search";
import Update from "./Update"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home" index element={<Home />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/display" element={<Display  />} />
            <Route path="/search" element={<Search  />} />
            <Route path="/update" element={<Update  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
