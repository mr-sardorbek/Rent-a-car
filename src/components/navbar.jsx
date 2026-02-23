import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeToggle from "./themeToggle";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `
  relative transition-colors duration-300
  ${
    isActive
      ? "text-secondary font-semibold"
      : "text-foreground hover:text-secondary"
  }
  after:content-['']
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-secondary
  after:transition-all
  after:duration-300
  hover:after:w-full
  ${isActive ? "after:w-full" : ""}
  `;

  return (
    <nav
      className={`
    fixed w-full z-50 transition-all duration-300
    ${
      scrolled ? "backdrop-blur-md bg-background/80 shadow-lg" : "bg-background"
    }
  `}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <NavLink
            to="/"
            className="text-secondary text-2xl md:text-3xl font-bold tracking-wide"
          >
            RENT A CAR
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to={`/`} className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/cars" className={linkClass}>
              Cars
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <ThemeToggle />

            <Button
              className="bg-secondary hover:bg-hover cursor-pointer
  text-background
  px-5 py-2
  rounded-xl
  shadow-md
  hover:shadow-xl
  hover:scale-105
  transition-all duration-300"
            >
              Login
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <HiX size={26} className="text-foreground" />
              ) : (
                <HiMenu size={26} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/cars"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Cars
            </NavLink>

            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            <ThemeToggle />

            <Button
              className="bg-secondary hover:bg-hover cursor-pointer
  text-background
  px-5 py-2
  rounded-xl
  shadow-md
  hover:shadow-xl
  hover:scale-105
  transition-all duration-300"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
