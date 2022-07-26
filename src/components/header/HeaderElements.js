import styled from "styled-components";
import Palette from "../../lib/Palette";

export const HeaderBlock = styled.div`
  background-color: ${Palette.green[0]};
  height: 6rem;
  padding: 2rem;
  position: relative;
  .header-container {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-btns {
    display: none;
    @media (max-width: 59em) {
      display: block;
    }
  }
  .btn-menu,
  .btn-close {
    padding: 1rem 2rem;
  }

  .header-icon {
    width: 4rem;
    height: 4rem;
  }
  .menu {
    @media (max-width: 59em) {
      z-index: 999;
    }
  }

  .fixed {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
    padding: 1rem 4rem;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;

    @media (max-width: 84em) {
      padding-left: 10rem;
    }
    @media (max-width: 75em) {
      width: 90%;
      padding: 1rem 10rem 1rem 6rem;
    }
    @media (min-width: 68em) {
      display: none;
    }
    @media (min-width: 81em) {
      display: none;
    }
  }

  .main-nav {
    list-style: none;
    display: flex;
    gap: 4.8rem;
    @media (max-width: 59em) {
      gap: 10rem;
      padding: 0;
    }
  }
  .main-nav-link {
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    @media (max-width: 59em) {
      font-size: 3.2rem;
    }
    &:hover {
      color: #112a36;
    }
  }
  .main-nav-link:hover {
    cursor: pointer;
  }
  .nav-open {
    transform: translateX(0);
  }
  .hidden {
    display: none;
  }
  .display {
    display: block;
    position: absolute;
    top: 4rem;
    right: 6rem;
    z-index: 9999;
  }
`;
