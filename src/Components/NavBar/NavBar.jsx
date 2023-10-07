import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <li className="lg:mr-5"><NavLink to="/">Home</NavLink></li>
        <li className="lg:mr-5"><NavLink to="login">Login</NavLink></li>
        <li className="lg:mr-5"><NavLink>Shop</NavLink></li>
        <li><NavLink>Coaches</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">ProPlay</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={logOut} className="btn btn-outline">SignOut</button>
                        :
                        <Link to="/login"><button className="btn btn-outline">Login</button> </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;