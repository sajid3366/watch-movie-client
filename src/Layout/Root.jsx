import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Pages/Shared/Navbar/Navbar";

const Root = () => {
    const location = useLocation();
    // console.log(location.pathname);
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;