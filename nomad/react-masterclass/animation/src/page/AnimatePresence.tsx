import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const boxVariants = {
  iinitial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 20,
  },
};

function Presence() {
  const [showing, setShowing] = useState(true);
  const toggleShowing = () => setShowing(!showing);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence> {/*안쪽에 사라지는걸 확인하고 animation을 줌*/}
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving" //나갈때 애니메이션을 줌
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Presence;

const Wrapper = styled(motion.div)`
  height: 85vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  border-radius: 15px;
  position: absolute;
  top: 250px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
