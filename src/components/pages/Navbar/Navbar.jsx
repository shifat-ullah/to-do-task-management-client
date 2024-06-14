import {  Link, NavLink } from "react-router-dom";

import { FaSignInAlt } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import './styles.css';
import { AuthContext } from "../../../provider/AuthProviders";
import { useContext, useState } from "react";



const Navbar = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

  

    const handleSignOut = () => {
        logOut()
            .than(result => {
                console.log(result)
            })
            .than(err => {
                console.log(err.massage)
            })
    }

    

    return (
        <div className="bg-base-100 fixed z-10 w-full shadow-md">
            <div className="lg:w-[1250px] flex justify-between mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
    
                            <li><NavLink to="/blog" activeClassName="active-link">Blog</NavLink></li>
                            <li><NavLink to="/Contact" activeClassName="active-link" className="nav-link">Contact</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className="flex items-center gap-3 text-2xl font-bold">
                        <img className="w-[120px] rounded h-10" src={logo} alt="Pet Shop Logo" />
                      
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-xl menu-horizontal px-1">
                        <li><NavLink exact to="/" activeClassName="active-link" className="nav-link">Home</NavLink></li>
                        <li><NavLink to="/blog" activeClassName="active-link" className="nav-link">Blog</NavLink></li>
                        <li><NavLink to="/Contact" activeClassName="active-link" className="nav-link">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-3 items-center">
                    {user ? (
                        <>
                            <NavLink to='/dashboard' className="text-xl lg:block hidden btn btn-sm btn-outline btn-primary transition-transform transform hover:scale-110">Dashboard</NavLink>
                            <div onClick={handleSignOut} className="text-xl btn btn-sm btn-outline btn-danger transition-transform transform hover:scale-110">Logout</div>
                        </>
                    ) : (
                        <>
                            <NavLink to='/login' className="text-xl btn btn-sm btn-outline btn-success flex items-center gap-2 transition-transform transform hover:scale-110">
                                <FaSignInAlt className="text-lg" /> Login
                            </NavLink>

                        </>
                    )}
                    <div className="relative">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
                            <div className="w-10 rounded-full transition-transform transform hover:scale-110">
                                {
                                    user ? <img src={user.photoURL} alt="" /> : <img alt="Profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                }

                            </div>
                        </div>
                        {isProfileMenuOpen && (
                            <ul className="absolute right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 animate-fade-in-down">
                                <li className="bg-slate-100 p-2">
                                    <NavLink to='/profile' activeClassName="text-blue-600">Profile</NavLink>
                                </li>
                                <li className="bg-slate-100 lg:hidden block p-2">
                                    <NavLink to='/dashboard' activeClassName="text-blue-600">Dashboard</NavLink>
                                </li>
{/* 
                                <NavLink to='/dashboard' className="text-xl block lg:hidden btn btn-sm btn-outline btn-primary transition-transform transform hover:scale-110">Dashboard</NavLink> */}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
