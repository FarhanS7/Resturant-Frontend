import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
<<<<<<< HEAD
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our menu</Link>
      </li>

      <li>
        <Link to="/order/salad">Order Food</Link>
=======
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
>>>>>>> aa05866e6981d0e6474c19f61e20d06cb5cd03a1
      </li>
    </>
  );
  return (
    <>
<<<<<<< HEAD
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-7xl">
=======
      <div className="navbar fixed z-10 bg-opacity-30 bg-white max-w-7xl">
>>>>>>> aa05866e6981d0e6474c19f61e20d06cb5cd03a1
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <div className="max-h-10 flex items-center">
            <Link to="/">
              <img
                className="max-h-60"
                src="https://i.imghippo.com/files/EXC2481bis.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
