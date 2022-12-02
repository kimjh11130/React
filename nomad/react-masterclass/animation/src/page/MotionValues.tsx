import React from "react"
import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";


function MotionValues() {
  const x = useMotionValue(0); // x축으로 얼마나 움직인 값을 보여준다.
  const rotateZ = useTransform(x, [-800, 800], [-360, 360])
  const gradient = useTransform( // 값을 특정한 값으로 바꿔준다.
    x,
    [-800, 800], 
    [
      "linear-gradient(135deg,rgb(0, 210, 238),rgb(0, 83, 238))",
      "linear-gradient(135deg,rgb(0, 238, 155),rgb(238, 178, 0))"
    ])
  const { scrollYProgress} = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5])
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default MotionValues;

const Wrapper = styled(motion.div)`
  height: 185vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
