import styled from "styled-components";
import Palette from "../../lib/Palette";
export const HeaderBlock = styled.div`
  background-color: ${Palette.yellow[0]};
  height: 6rem;
  padding: 2rem;
  .header-container {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .main-nav {
    list-style: none;
    display: flex;
    gap: 4.8rem;
  }
  .main-nav-link {
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: #112a36;
    }
  }
  .main-nav-link:hover {
    cursor: pointer;
  }
`;
