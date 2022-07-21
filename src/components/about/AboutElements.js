import React from "react";
import styled from "styled-components";
import Palette from "../../lib/Palette";
const Container = styled.div`
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`;
const AboutElementsBlock = styled.div`
  height: 70rem;
  width: 100%;
  margin: 9.6rem 0;
  display: grid;
  grid-template-columns: 65fr 35fr;
  background-color: ${Palette.yellow[0]};
  .about-text-box {
    padding: 4rem 12.5rem;
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
    width: 50rem;
    height: 70rem;
    background-position: center;
    background-size: cover;
  }
`;
const AboutElements = () => {
  return (
    <Container className='container'>
      <AboutElementsBlock>
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
    </Container>
  );
};
export default AboutElements;
