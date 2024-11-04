import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar backdrop-blur-xl bg-white/30 z-50 fixed top-0 px-8 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-7">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                        <NavLink 
                            className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`}
                        to='/'><a>Home</a></NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/coffees'><a>Coffees</a></NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/dashboard'><a>Dashboard</a></NavLink>
                    </ul>
                </div>
                <NavLink  to='/' className="text-xl font-bold ">Coffee Shop</NavLink>
            </div>
            <div className="navbar-end lg:flex hidden">
                <ul className="menu menu-horizontal px-1 gap-8 ">
                <NavLink className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/'><a>Home</a></NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/coffees'><a>Coffees</a></NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/dashboard'><a>Dashboard</a></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;