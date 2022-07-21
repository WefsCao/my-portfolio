import React from "react";
import styled from "styled-components";
import Palette from "../../lib/Palette";

import { MdOutlineDesktopMac } from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";
import { GrTestDesktop } from "react-icons/gr";
import { AiOutlineAndroid } from "react-icons/ai";
const ServicesElementsBlock = styled.div`
  padding: 9.6rem 0;
  .services__block {
    margin-top: 6.4rem;
  }
  .icon {
    width: 2.4rem;
    height: 2.4rem;
  }
  .icon-bgc {
    display: inline-block;
    background-color: ${Palette.yellow[2]};
    padding: 1.5rem;
    border-radius: 50%;
  }
  .service {
    width: 65%;
    justify-self: center;
  }
  .title {
    font-size: 2.4rem;
    font-weight: 600;
  }
  .text {
    max-width: 20rem;
    font-size: 1.8rem;
    line-height: 1.8;
    margin-top: 2.4rem;
  }
`;
const ServicesElements = () => {
  return (
    <ServicesElementsBlock className='container'>
      <h2>services</h2>
      <div className='services__block grid grid--2-cols'>
        <div className='service'>
          <div className='icon-bgc'>
            <MdOutlineDesktopMac className='icon' />
          </div>
          <p className='title'>UI作成</p>
          <p className='text'>
            HTML5, CSS3, Javascrip等 を用いてWebサイトのフロント エンド作成
          </p>
        </div>
        <div className='service'>
          <div className='icon-bgc'>
            <SiMaterialdesign className='icon' />
          </div>
          <p className='title'>Webデザイン</p>
          <p className='text'>
            Figma, Photoshop等のテンプレートを基にしてWebサイトのUIを設計
          </p>
        </div>
        <div className='service'>
          <div className='icon-bgc'>
            <GrTestDesktop className='icon' />
          </div>
          <p className='title'>Web system 開発</p>
          <p className='text'>
            Webサイトを静的から動的に 動かせるためのサーバ、DB設計
          </p>
        </div>
        <div className='service'>
          <div className='icon-bgc'>
            <AiOutlineAndroid className='icon' />
          </div>
          <p className='title'>Android app 開発</p>
          <p className='text'>Java, Android studioを用いてAndroidアプリ開発</p>
        </div>
      </div>
    </ServicesElementsBlock>
  );
};
export default ServicesElements;
