import React from "react";
import styled from "styled-components";
import Palette from "../../lib/Palette";
import { Link } from "react-scroll";
import heroImg from "../../images/hero-image.png";
const Container = styled.div`
  @media (max-width: 73.5em) {
    padding: 0 3rem;
  }
`;
const HeroElementsBlock = styled.div`
  height: 55rem;
  background-color: ${Palette.green[0]};
  margin: 0;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 10rem;
    right: -4rem;
    width: 60rem;
    height: 60rem;
    border-radius: 50%;
  }
  h1 {
    margin-top: 8rem;
    font-size: 4rem;
    line-height: 1.3;
    max-width: 50rem;
    @media (max-width: 73.5em) {
      font-size: 3.7rem;
      line-height: 1.4;
    }
  }
  .btns {
    margin-top: 8rem;
  }
  .hero-img-box {
    background-size: cover;
    background-position: center;
    transform: translate(250px, -100px);
    @media (max-width: 75em) {
      transform: translate(200px, -110px);
    }
    @media (max-width: 59em) {
      transform: translate(200px, -70px);
    }
    @media (max-width: 44em) {
      transform: translate(30px, -47px);
    }
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
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 34em) {
      padding: 1.5rem 2.5rem;
      font-size: 1rem;
    }
  }
  .btn--contact {
    background-color: #112a46;
    margin-right: 3.4rem;
    color: #fff;
    &:hover {
      background-color: RGBA(17, 42, 70, 0.85);
      color: #fff;
    }
  }
  .btn--about {
    background-color: #fff;
    &:hover {
      box-shadow: 0 0 0 4px #fff;
      background-color: transparent;
      color: #112a46;
    }
  }
`;

const HeroElements = () => {
  return (
    <HeroElementsBlock id='hero'>
      <Container className='container grid grid--2-cols'>
        <div className='hero-text-box'>
          <h1>初めまして。カオと申します。Webフロントエンドの開発者です。</h1>
          <div className='btns'>
            <Link
              spy={true}
              smooth={true}
              offset={90}
              duration={500}
              to='footer'
              className='links btn--contact'
            >
              Contact me
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to='about'
              className='links btn--about'
            >
              About me
            </Link>
          </div>
        </div>
        <div className='hero-img-box'>
          <img src={heroImg} alt='' className='img' />
        </div>
      </Container>
    </HeroElementsBlock>
  );
};
export default HeroElements;
