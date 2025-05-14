import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
<hr color="red"/>
<br/>
<Outlet/>

<hr color="red"/>
<p>www.all rights reserved</p>      
    </div>
  )
}

export default Layout
