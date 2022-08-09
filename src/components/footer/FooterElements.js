import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Palette from "../../lib/Palette";
import { Link } from "react-scroll/modules";
const FooterElementsBlock = styled.div`
  margin-top: 20rem;
  border-top: 1px solid #dadada;
  padding: 14.8rem 0;
  .social-links {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  .social-link {
    margin-top: 3.2rem;
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }
  .copyright {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
  .nav-title {
    font-size: 2rem;
    margin-bottom: 4.8rem;
    font-weight: 600;
  }

  .contacts {
    margin-top: 6.4rem;
  }
  .adress {
    font-size: 1.4rem;
  }
  .footer-link {
    display: block;
    margin-bottom: 1.4rem;
    font-size: 1.4rem;
    cursor: pointer;
    text-decoration: none;
  }
  .project-link {
    display: block;
    width: 17rem;
    border-radius: 5px;
    text-decoration: none;
    background-color: ${Palette.green[0]};
    padding: 1rem;
    margin-bottom: 1.8rem;
    font-weight: 600;
    font-size: 1.4rem;
    &:hover {
      background-color: ${Palette.green[1]};
    }
    @media (max-width: 59em) {
      width: 70%;
    }
  }
  .footer-container {
    @media (max-width: 34em) {
      grid-template-columns: repeat(2, 1fr);
      padding: 12.8rem 3rem;
    }
  }
`;
const FooterElements = () => {
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterElementsBlock id='footer'>
      <div className=' footer-container container grid grid--3-cols'>
        <div className='logo-col'>
          <a href='#index' onClick={handleScrollToTop}>
            <img src={logo} alt='' className='logo' />
          </a>
          <div className='social-links'>
            <a href='https://www.facebook.com/thanh.diem.5817300'>
              <FaFacebook className='social-link' />
            </a>
            <a href='https://github.com/WefsCao'>
              <AiFillGithub className='social-link' />
            </a>
            <a href='https://www.youtube.com/channel/UCfoL9GK_RSQeXx5RsmaB4NQ'>
              <AiFillYoutube className='social-link' />
            </a>
          </div>
          <p className='copyright'>Copyright &copy; 2022 by Wefscao</p>
        </div>
        <div className='nav-col'>
          <p className='nav-title'>Contact me</p>
          <div class='contacts'>
            <p class='adress'>埼玉県坂戸市緑町 4-10-406</p>
            <a class='footer-link' href='tel:415-201-6370'>
              080-2643-1095
            </a>
            <br />
            <a class='footer-link' href='mailto:wefs.caodiem@gmail.com'>
              wefs.caodiem@gmail.com
            </a>
          </div>
        </div>
        <div className='nav-col'>
          <p className='nav-title'>My projects</p>
          <a
            className='project-link'
            href='https://wefscao.github.io/Omnifood/'
          >
            My Omnifood project
          </a>
          <a
            className='project-link'
            href='https://wefscao-natours.netlify.app/'
          >
            My Na-tours project
          </a>
          <Link
            className='project-link'
            to='header'
            spy={true}
            smooth={true}
            duration={500}
          >
            My Portfolio
          </Link>
          <a className='project-link' href='https://wefscao.github.io/cat/'>
            My Blog Social Project
          </a>
        </div>
      </div>
    </FooterElementsBlock>
  );
};
export default FooterElements;
