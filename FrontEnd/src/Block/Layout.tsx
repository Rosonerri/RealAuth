import {Outlet} from "react-router-dom"
import Header from "./Header"
import Flash from "../Pages/Flash"
const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Flash/>
    </div>
  )
}

export default Layout