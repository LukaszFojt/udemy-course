import React from "react";
import { useState } from "react";
import { znaczekX, logo, znaczekMenu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="navbar">
            <a href="/"><img className="navbar_logo" src={logo} alt="logo-img"/></a>
            <ul className="navbar_ul hidden sm:flex">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className="navbar_li"
                    >
                        <a className="navbar_a" href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="navbar_mobile sm:hidden flex">
                <div className={`${toggle ? 'flex' : 'hidden'}`}>
                    <ul className="navbar_ul py-[40px] sm:flex">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className="navbar_li"
                            >
                            <a className="navbar_a" href={`${nav.id}`}>
                                {nav.title}
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <img 
                src={toggle ? znaczekX : znaczekMenu}
                className="w-[24px] h-[24px]"
                alt="menu" 
                onClick={() =>
                setToggle((prev) =>
                !prev)}
                />
            </div>
        </nav>
    )
}

export default Navbar;