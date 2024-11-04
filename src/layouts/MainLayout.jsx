import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster />
            {/* Navbar */}
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-232px)] w-11/12 mx-auto">
                {/* inspect tool- navbar height = 68px + footer height 164px = 232px */}
                {/* Dynamic */}
                <Outlet></Outlet>



            </div>


            {/* Footer */}

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;