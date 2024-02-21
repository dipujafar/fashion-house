import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";


const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-400px)]">
          <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </>
    );
};

export default Root;