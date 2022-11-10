import { Link } from "react-router-dom";
import styled from "styled-components";

const CreateBoard = ({ onChange, onCreate, name, title, content }) => {
  return (
    <Container>
      <PersonInput type="text" name="name" placeholder="작성자" />
      <TitleInput type="text" name="title" placeholder="제목" />
      <ContentInput
        as="textarea"
        name="content"
        type="text"
        placeholder="내용"
      />
      <Submit>
        <Link to="/">제출</Link>
      </Submit>
    </Container>
  );
};

export default CreateBoard;

// 제목, 내용, 작성자 누구?, 날짜,

const Container = styled.div`
  width: 1903px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: white;
// `;

const Input = styled.input`
  width: 50vw;
  margin: 15px;
  padding: 4px;
  &:focus {
    border-color: #579bfa;
    outline: none;
  }
`;

const TitleInput = styled(Input)`
  height: 60px;
`;

const PersonInput = styled(Input)`
  margin: 15px;
`;

const ContentInput = styled(Input)`
  margin: 15px;
  height: 300px;
`;

const Submit = styled.button``;
