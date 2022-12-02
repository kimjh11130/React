import { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const boxVariants = {
  hover: {scale: 1.5, rotateZ: 90},
  click: { scale: 1, borderRadius: "100px"}
}

function Gestures() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}> 
      <Box
        drag
        dragConstraints={biggerBoxRef} // drag 제한
        dragSnapToOrigin                // 초기 위치로 다시 움직이기
        whileDrag={{backgroundColor: "rgb(46, 204, 113)"}}
        variants={boxVariants} 
        whileHover="hover" //boxVariants에서 값 가져오기
        whileTap ="click" 
        />
        </BiggerBox>
    </Wrapper>
  );
}

export default Gestures;

const Wrapper = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,#e09,#d0e);
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255,255,255,0.5);
  border-radius: 40px;
  display:flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
