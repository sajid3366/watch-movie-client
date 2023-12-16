import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../components/Pages/Login/Login";
import Home from "../components/Pages/Home/Home";
import Signup from "../components/Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
        ]
        
    }
])

export default router;