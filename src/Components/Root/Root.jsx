import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../Pages/Footer";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Root;