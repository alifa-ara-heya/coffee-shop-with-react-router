import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)]">
                {/* inspect tool- navbar height = 68px + footer height 164px = 232px */}
                {/* Dynamic */}
                <Outlet></Outlet>



            </div>


            {/* Footer */}

            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;