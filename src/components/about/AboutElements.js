import React from "react";
import styled from "styled-components";
import Palette from "../../lib/Palette";

const AboutElementsBlock = styled.div`
  height: 70rem;
  background-color: ${Palette.green[0]};
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 3px 10px 0 RGBA(0, 0, 0, 0.2);
  margin: 12.8rem 3rem;
  display: grid;
  grid-template-columns: 6fr 4fr;
  /***************************************
    BELOW 944px(Tablets)
    ****************************************/
  @media (max-width: 59em) {
    margin-top: 6.4rem;
  }
  @media (max-width: 34em) {
    height: auto;
    grid-template-columns: 1fr;
    width: 70%;
    margin: 30rem auto 20rem auto;
  }

  .about-text-box {
    padding: 8rem 4rem 8rem 8rem;
  }
  .list {
    transform: translateX(-4rem);
  }
  span {
    font-size: 1.8rem;
  }
  .label {
    font-weight: 600;
    font-size: 2rem;
  }
  .info {
    font-weight: 700;
    font-size: 1.8rem;
  }

  .about-img {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .about-img-box {
    @media (max-width: 34em) {
      grid-row: 1;
    }
  }
`;
const AboutElements = () => {
  return (
    <AboutElementsBlock id='about'>
      <div className='about-text-box'>
        <h2>About me</h2>
        <ul className='list'>
          <li className='list-item'>
            <span className='label'>名前:</span>
            <span className='info'>カオ ティ ジェム</span>
          </li>
          <li className='list-item'>
            <span className='label'>国籍:</span>
            <span className='info'>ベトナム</span>
          </li>
          <li className='list-item'>
            <span className='label'>年齢:</span>
            <span className='info'>22歳</span>
          </li>
          <li className='list-item'>
            <span className='label'>趣味:</span>
            <span className='info'>カラオケ、コーディング、デザイン...</span>
          </li>
          <li className='list-item'>
            <span className='label'>夢:</span>
            <span className='info'>
              フロントエンドエンジニア、UI/UX設計者になる
            </span>
          </li>
          <li className='list-item'>
            <span className='label'>言語:</span>
            <span className='info'>ベトナム語、日本語、英語</span>
          </li>
        </ul>
      </div>
      <div className='about-img-box'>
        <img
          src={require("../../images/about-img.png")}
          alt=''
          className='about-img'
        />
      </div>
    </AboutElementsBlock>
  );
};
export default AboutElements;
