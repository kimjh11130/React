import styled from "styled-components";

const Footer = () => {
  return <Wrapper>밑에있는 바닥</Wrapper>;
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 20vh;
  width: 1903px;
  font-size: 40px;
  font-weight: 700;
  color: white;
`;
