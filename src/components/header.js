
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../app.css';
//This line defines a functional component called "Header"
const Header = () => {
    //This line utilizes the useState hook
    const [toggle, setToggle] = useState(false);
    //This line defines a function handleToggle which toggles the value of toggle whenever it's called
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
            <a href="/" className="logo text-2xl font-bold text-accent">
                Mohammed Tayyab Hussain
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#resume -link" target="_blank" without rel="noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav
                className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
            >
                <ul className="flex flex-col">
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                    <li>
                        <a href="/#resume">Resume</a>
                    </li>
                </ul>
            </nav>

            {/* Toggle button */}
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>
        </header>
    );
};

export default Header;