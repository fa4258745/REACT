import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/form">Form</Link>
      <Link to="/insert">Insert</Link>
      <Link to="/display">Display</Link>
      <Link to="/search">Search</Link>
      <Link to="/update">Update</Link>
      <br />
      <hr size="4" color="red" />
      <Outlet />
      <br />
      <hr size="4" color="red" />
      www.compnay.all rights reserved
    </>
  );
};

export default Layout;
