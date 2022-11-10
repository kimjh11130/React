import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <Wrapper>
      <Link to="/create">
        <FaPlus />
      </Link>
    </Wrapper>
  );
};

export default CreateButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: lightgreen;
  color: white;
  font-size: 70px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: lightgreen;
  }
`;
