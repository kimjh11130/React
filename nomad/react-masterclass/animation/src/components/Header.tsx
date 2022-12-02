import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ButtonBox>
      <Link to="/">
        <Button>Basic page</Button>
      </Link>

      <Link to="gestures">
        <Button>Gestures page</Button>
      </Link>

      <Link to="variants">
        <Button>Variants page</Button>
      </Link>

      <Link to="motionValues">
        <Button>MotionValues page</Button>
      </Link>

      <Link to="svgAnimation">
        <Button>SVGAnimation page</Button>
      </Link>

      <Link to="presence">
        <Button>AnimatePresence page</Button>
      </Link>

      <Link to="slider">
        <Button>Slider page</Button>
      </Link>

      <Link to="layout">
        <Button>Layout page</Button>
      </Link>

      <Link to="final">
        <Button>Final Project</Button>
      </Link>
    </ButtonBox>
  );
};

export default Header;

const ButtonBox = styled.div`
  height: 15vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Button = styled.button`
  height: 6vh;
  width: 12vw;
  background-color: #c219ec;
  border: 1px solid #e09;
  border-radius: 1.5vh;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  color: white;
  font-weight: 600;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #e98fff;
  }
  &:active {
    background-color: #992cb4;
  }
`;
