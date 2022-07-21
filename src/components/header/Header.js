import React from "react";
import { HeaderBlock } from "./HeaderElements";
import logo from "../../images/logo.png";

function Header() {
  const handleScrollSmooth = (e) => {
    console.log("aaa");
  };
  return (
    <>
      <HeaderBlock>
        <div className='header-container'>
          <a href='index.html'>
            <img src={logo} alt='header of logo' className='logo' />
          </a>
          <ul className='main-nav'>
            <li>
              <a
                href='#services'
                className='main-nav-link'
                onClick={handleScrollSmooth}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className='main-nav-link'
                onClick={handleScrollSmooth}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#footer'
                className='main-nav-link'
                onClick={handleScrollSmooth}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#footer'
                className='main-nav-link'
                onClick={handleScrollSmooth}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </HeaderBlock>
    </>
  );
}
export default Header;
