import styled from "styled-components";
import { motion } from "framer-motion";

function Basic() {
  return (
    <Wrapper>
      <Box
        transition={{ type: "spring", delay: 0.5 }} // 추가사항
        initial={{ scale: 0 }} // 초기 상태
        animate={{ scale: 1, rotateZ: 360 }} // 나중 상태
      />
    </Wrapper>
  );
}
export default Basic;

const Wrapper = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,#e09,#d0e);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
