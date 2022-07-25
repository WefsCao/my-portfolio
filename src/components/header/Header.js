import React, { useState } from "react";
import { HeaderBlock } from "./HeaderElements";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header() {
  const [fixed, setFixed] = useState(false);
  const [nav, setNav] = useState("hidden");
  const setNavBarFixed = () => {
    if (window.scrollY >= 700) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", setNavBarFixed);

  const handleOpenMainNav = () => {
    setNav("open");
  };
  const handleCloseMainNav = () => {
    setNav("close");
  };
  return (
    <>
      <HeaderBlock>
        <div className={fixed ? "header-container fixed" : "header-container"}>
          <Link to='/'>
            <img src={logo} alt='header of logo' className='logo' />
          </Link>
          <ul className={nav === "open" ? "main-nav nav-open" : "main-nav"}>
            <li>
              <Link
                to='services'
                spy={true}
                smooth={true}
                offset={110}
                duration={500}
                className='main-nav-link'
                onClick={handleCloseMainNav}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='skills'
                spy={true}
                smooth={true}
                offset={90}
                duration={500}
                className='main-nav-link'
                onClick={handleCloseMainNav}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={90}
                duration={500}
                to='footer'
                className='main-nav-link'
                onClick={handleCloseMainNav}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={90}
                duration={500}
                to='footer'
                className='main-nav-link'
                onClick={handleCloseMainNav}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <button>
              <AiOutlineMenu
                className={
                  nav === "open"
                    ? "header-icon menu hidden"
                    : "header-icon menu"
                }
                onClick={handleOpenMainNav}
              />
            </button>
            <button>
              <AiOutlineClose
                className={
                  nav === "open"
                    ? "header-icon close display"
                    : "header-icon close"
                }
                onClick={handleCloseMainNav}
              />
            </button>
          </div>
        </div>
      </HeaderBlock>
    </>
  );
}
export default Header;
