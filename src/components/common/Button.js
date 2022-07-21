import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const ButtonBlock = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 2rem 4rem;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 1.6rem;
  background-color: #fff;
  box-shadow: 0 5px 0 0 rgba(0, 0, 0, 0.05);
  ${(props) =>
    props.primary &&
    css`
      &:hover {
        background-color: #f59f00;
        color: #eee;
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      border: 3px solid #fff;
      background-color: transparent;
      &:hover {
        border: 3px solid #f59f00;
        background-color: #f59f00;
        color: #fff;
      }
    `}
  ${(props) =>
    props.mgr &&
    css`
      margin-right: 3.4rem;
    `}
`;

const Button = ({ children, ...rest }) => {
  return <ButtonBlock {...rest}>{children}</ButtonBlock>;
};
export default Button;
