import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo/Fashion-House-logo.png";
import Container from "./Container";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const Navbar = () => {
  const { user,  logOut} = useAuth();
  const [show, setShow] = useState(false);
  const {pathname}= useLocation();
  console.log(location)

  const handleLogout = () =>{
    logOut()
    .then(()=>{
        toast("User Successfully Logged Out")
    })
  }

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-400" : ""
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-400" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-400" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    
    </>
  );
  return (
    <div className={`bg-base-300 ${pathname == '/' ? 'bg-blue-200 fixed z-10 w-full bg-opacity-30' : ''}`}>
      <Container>
        <div className="navbar rounded">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase font-medium"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/">
              <div className="flex justify-center items-center">
                <img src={logoImg} alt="logo_image" className="w-10" />
                <p className="uppercase text-2xl font-medium text-blue-600">
                  JUF
                </p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase font-medium">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
                <div className="relative">
                 <img onClick={()=>setShow(!show)} src={user?.photoURL} alt="profile_photo" className="w-10 rounded-full" />
                <div className={`absolute z-10 bg-blue-300 py-5 w-40 rounded right-0 ${show ? "top-12 right-0" : "-top-60"} duration-1000`}>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <img src={user?.photoURL} alt="profile_photo" className="w-14 rounded-full"  />
                        <div className=" font-medium uppercase">{user?.displayName}</div>
                    <button onClick={handleLogout} className="btn btn-info btn-sm">Logout</button>
                    </div>
                </div>
                </div>
            ) : (
              <Link to="/login">
                <button className="btn  btn-info btn-sm">Login</button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
