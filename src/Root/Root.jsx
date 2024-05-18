import { Outlet } from "react-router-dom";
import Footer from "../Components/Pages/Shared/Footer/Footer";
import Navbar from "../Components/Pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;