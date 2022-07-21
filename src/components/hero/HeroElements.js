import React from "react";
import styled from "styled-components";
import Palette from "../../lib/Palette";

import heroImg from "../../images/hero-img02.png";

const HeroElementsBlock = styled.div`
  height: 55rem;
  background-color: ${Palette.yellow[0]};
  margin: 0;
  h1 {
    margin-top: 8rem;
    font-size: 4rem;
    line-height: 1.3;
    max-width: 50rem;
  }
  .btns {
    margin-top: 8rem;
  }
  .hero-img-box {
    background-size: cover;
    background-position: center;
    transform: translate(140px, -118px);
  }
  .img {
    width: 37.5rem;
    height: 66.6rem;
  }
  .links {
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 2rem 4rem;
    font-size: 2rem;
    border-radius: 1.6rem;
  }
  .btn--contact {
    background-color: #f59f00;
    color: #eee;
    margin-right: 3.4rem;
    &:hover {
      background-color: #fff;
      color: #f59f00;
    }
  }
  .btn--about {
    border: 3px solid #fff;
    background-color: transparent;
    &:hover {
      border: 3px solid #f59f00;
      background-color: #f59f00;
      color: #fff;
    }
  }
`;
const HeroElements = () => {
  const handleScrollSmooth = (e) => {
    const href = e.target.getAttribute("href");
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HeroElementsBlock>
      <div className='container grid grid--2-cols'>
        <div className='hero-text-box'>
          <h1>初めまして。カオと申します。Webフロントエンドの開発者です。</h1>
          <div className='btns'>
            <a
              href='#contact'
              className='links btn--contact'
              onClick={handleScrollSmooth}
            >
              Contact me
            </a>
            <a
              href='#about'
              className='links btn--about'
              onClick={handleScrollSmooth}
            >
              About me
            </a>
          </div>
        </div>
        <div className='hero-img-box'>
          <img src={heroImg} alt='' className='img' />
        </div>
      </div>
    </HeroElementsBlock>
  );
};
export default HeroElements;
