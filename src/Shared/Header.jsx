import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../Login and Register/Provider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const handleLogout = () => {
        logout()
            .then()
            .catch(err => { })
    }
    console.log(user?.photoURL)

    return (
        // <nav className='md:flex justify-around items-center md:py-2 pt-2 bg-slate-50'>
        //     <div className='text-center'>
        //         <Link to="/" className='text-2xl font-serif '>The College Store</Link>
        //     </div>
        //     <div onClick={() => setIsOpen(!isOpen)} className='md:hidden ml-5 '>
        //         <span> {isOpen ? <XMarkIcon className="h-8 w-8 text-red-500" /> : <Bars3BottomLeftIcon className="h-8 w-8 text-blue-500" />}</span>
        //     </div>
        //     <div className={`md:flex md:gap-[150px] items-center bg-slate-900 md:bg-slate-50  absolute md:static duration-1000 ${isOpen ? "top 0" : "top 400 z-20"}`}>
        //         <div className='p-5'>
        //             <ul className='md:flex gap-10 font-serif text-white md:text-black'>
        //                 <li className={location.pathname === "/" ? "text-indigo-600 " : ""}>
        //                     <p><Link to="/">Home</Link></p>
        //                 </li>
        //                 <li className={location.pathname === "/allCollege" ? "text-indigo-600 " : ""}>
        //                     <Link to="/allCollege" >Colleges</Link>
        //                 </li>
        //                 <div className='md:flex md:gap-5'>
        //                     <li className={location.pathname === "/addmission" ? "text-indigo-600 " : ""}>
        //                         <Link to="/addmission" >Addmission</Link>
        //                     </li>
        //                     <li className={location.pathname === "/myCollege" ? "text-indigo-600 " : ""}>
        //                         <Link to="/myCollege" >My College</Link>
        //                     </li>

        //                 </div>


        //             </ul>
        //         </div>

        //         <div className=' flex gap-10 p-2'>
        //             {
        //                 user ? <div className='flex items-center justify-center gap-4'>
        //                     <img className='h-[40px] w-[40px] rounded-full ' src={user?.photoURL} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt="profile img" />
        //                     {
        //                         showName && <div className="tooltip tooltip-open tooltip-bottom absolute top-[75px] right-[210px] " data-tip={user?.displayName}>

        //                         </div>
        //                     }
        //                     <button className='btn btn-outline btn-success' onClick={handleLogout} > <Link to="/register">Logout</Link> </button>
        //                 </div> :
        //                     <button className='btn btn-outline btn-success'> <Link to="/login" >Login</Link> </button>

        //             }
        //         </div>
        //     </div>
        // </nav>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns={user?.photoURL} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to = "/"><button className="btn btn-ghost normal-case md:text-xl">The College Store</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/allColleges">Colleges</Link>
                    <Link to="/addmission" >Addmision</Link>
                    <Link to="/myCollege" >My College</Link>
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <Link onClick={handleLogout}><button className="btn btn-outline btn-sm">Logout</button></Link> : <Link to='/login'><button className="btn btn-outline btn-sm">Login</button></Link>
                }
            </div>
            <div className="dropdown dropdown-end ml-6">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

