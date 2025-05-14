import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Faculty from "./Faculty";
import Courses from "./Courses";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/home" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/faculty" element={<Faculty />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/contactus" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;