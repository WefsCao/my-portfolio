import React from "react";
import styled from "styled-components";
import Palette from "../../lib/Palette";
import ProgressBar from "../../middlewares/ProgressBar";
import { BsCheckLg } from "react-icons/bs";
const SkillsElementsBlock = styled.div`
  padding: 9.6rem 0;
  .center {
    transform: translateX(45rem);
  }
  .skills-content {
    margin-top: 6.4rem;
    align-items: center;
  }
  .skill {
    font-size: 2.2rem;
    font-weight: 600;
  }
  .skills__block {
    display: grid;
    grid-template-columns: 25fr 75fr;
    column-gap: 2.4rem;
    row-gap: 8rem;
  }
`;
export const ExtraSkills = styled.div`
  width: 50rem;
  height: 80rem;
  background-color: ${Palette.yellow[2]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .extra-title {
    text-transform: uppercase;
    font-size: 3.2rem;
    font-weight: 600;
    transform: translateY(1rem);
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 6.4rem;
  }
  .list-item {
    display: flex;
    gap: 2rem;
    align-items: center;
    list-style: none;
  }
  .check-icon {
    width: 2rem;
    height: 2rem;
  }
  span {
    font-size: 2.2rem;
  }
`;
const SkillsElements = () => {
  return (
    <SkillsElementsBlock className='container'>
      <h2 className='center'>skills</h2>
      <div className=' skills-content grid grid--2-cols'>
        <div className='skills__block'>
          <p className='skill'>HTML5</p>
          <ProgressBar currentProgressVal={90} />
          <ProgressBar currentProgressVal={80} />
          <p className='skill'>CSS3</p>
          <p className='skill'>Javascript</p>
          <ProgressBar currentProgressVal={80} />
          <ProgressBar currentProgressVal={75} />
          <p className='skill'>ReactJS</p>
          <p className='skill'>Redux</p>
          <ProgressBar currentProgressVal={70} />
          <ProgressBar currentProgressVal={80} />
          <p className='skill'>Java</p>
        </div>
        <ExtraSkills>
          <p className='extra-title'>Extra Skills</p>
          <ul className='list'>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>Figma</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>Photoshop</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>Sass</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>Github</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>NPM</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>NodeJS</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>MongoDB</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>MySQL</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>ES6+</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>Fetch API</span>
            </li>
            <li className='list-item'>
              <BsCheckLg className='check-icon' />
              <span>Web performance</span>
            </li>
          </ul>
        </ExtraSkills>
      </div>
    </SkillsElementsBlock>
  );
};
export default SkillsElements;
