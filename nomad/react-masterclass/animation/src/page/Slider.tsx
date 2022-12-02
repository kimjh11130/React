import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const box = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {duration: 0.5},
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {duration: 0.5},
  }),
};

function Slider() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false)
  const nextPlease = () => {
    setBack(false)
    setVisible((prev) => (prev === 10 ? 10 : prev + 1))
  };
  const prevPlease = () => {
    setBack(true)
    setVisible((prev) => (prev === 1 ? 1 : prev - 1))
  };
  return (
    <Wrapper>
      <AnimatePresence mode="wait" custom={back}>
        {/*안쪽에 사라지는걸 확인하고 animation을 줌*/}            
        <Box
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible} // key가 달라지면 리렌더링이 된다.
        >
          {visible}
        </Box>
        </AnimatePresence>
        <div>
          <Button onClick={nextPlease}>next</Button>
          <Button onClick={prevPlease}>prev</Button>
        </div>
    </Wrapper>
  );
}

export default Slider;

const Wrapper = styled(motion.div)`
  height: 85vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  border-radius: 15px;
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 10px;
  margin-right: 20px;
  background-color: pink;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  &:hover{
    background-color: #fad1d8;
  }
  &:active{
    background-color: #d8919d
  }
`