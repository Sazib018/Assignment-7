// src/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const Dropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="max-w-[1320px] mx-auto flex items-center justify-between p-4 bg-[#fff] text-black">

<div className="dropdown lg:hidden">
                <div
                    tabIndex="0"
                    role="button"
                    className="btn btn-ghost"
                    onClick={Dropdown}
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

                {isDropdownOpen && (
                    <ul
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a href="/">Home</a></li>
                        <li><a href="/recipes">Recipes</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/search">Search</a></li>
                    </ul>
                )}
            </div>
            <div className="text-[#150B2B] text-[32px] font-bold">Recipe Calories</div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-12">
                    <li><a href="/">Home</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/search">Search</a></li>
                </ul>
            </div>

            <div className="navbar-end flex">
                <div className="hidden md:flex items-center bg-[#F3F3F4] p-2 rounded-[50px] mr-2 gap-2">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-[17px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-[#F3F3F4] text-[#150B2BB2]"
                    />
                </div>
                <a className="text-4xl text-[#0BE58A]">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"></path>
                    </svg>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
