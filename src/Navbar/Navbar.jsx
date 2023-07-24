import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, loggedOut } = useContext(AuthContex)



    console.log(user)
    const handleLoggedOut = () => {
        loggedOut()
            .then(() => {

            })
            .catch(error => { console.log(error) })
    }
    const items = <>
        <Link to='/' className="m-3">Home</Link>
        <Link to='/collegeroute' className="m-3">Colleges</Link>
        <Link to='/admission' className="m-3">Admission</Link>
        <Link to='/mycollege' className="m-3">My College</Link>
    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <img className="w-16 rounded-full ml-2" src="https://img.freepik.com/premium-vector/campus-collage-university-education-logo-design-template_7492-61.jpg?w=740" alt="" />
                <p className="uppercase hidden md:block text-2xl ml-4 text-red-400">College Service</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                {items}
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <Link to='/profile'><p className="m-2">{user?.displayName}</p></Link>
                        <Link onClick={handleLoggedOut} className="btn">LogOut</Link>
                    </> : <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;