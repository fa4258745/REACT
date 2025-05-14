import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    
      <hr color=" red"></hr>
      <p>
        <Outlet />
        www.@copright all right reserved
      </p>
      <hr color="red"></hr>
    </>
  );
};

export default Layout;
