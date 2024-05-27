import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";
import useMediaQuery from "../hooks/useMediaQuery";
import ActionButton from "../shared/ActionButton";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = ({isTopOfPage}) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const flexBetween = "flex items-center justify-between";

  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"; 
  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 w-full z-20`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full`}>
            {/* left side */}
            <img src={Logo} alt="Website" />
          </div>
          {/* Right Side */}
          {isAboveMediumScreen ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link to="home" smooth={true} offset={-260} duration={500}>
                  Home
                </Link>
                <Link to="benefits" smooth={true} offset={-260} duration={500}>
                  Benefits
                </Link>
                <Link to="classes" smooth={true} offset={-260} duration={500}>
                  Our Courses
                </Link>
                <Link to="contactus" smooth={true} offset={-260} duration={500}>
                  Contact Us
                </Link>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <a href="#">Sign In</a>
                <ActionButton link="contactus">Become A Member</ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-fill bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Model */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
            </button>
          </div>
          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col text-2xl">
            <Link to="home" smooth={true} offset={-260} duration={500}>
              Home
            </Link>
            <Link to="benefits" smooth={true} offset={-260} duration={500}>
              Benefits
            </Link>
            <Link to="classes" smooth={true} offset={-260} duration={500}>
              Our Courses
            </Link>
            <Link to="contactus" smooth={true} offset={-260} duration={500}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
