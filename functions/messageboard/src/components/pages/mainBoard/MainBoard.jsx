import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateBoard from "../createBoard/CreateBoard";
import BoardItem from "./BoardItem";
import CreateButton from "./CreateButton";

const MainBoard = () => {
  const [inputs, setInputs] = useState({
    text: "",
    title: "",
    content: "",
  });

  const { text, title, content } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [boards, setBoards] = useState([
    {
      id: "1",
      title: "1번 게시물 이름",
      name: "1번 작성자",
      content:
        "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
    },
    {
      id: "2",
      title: "2번 게시물 이름",
      name: "2번 작성자",
      content:
        "내용내용용내용내용내용내내ㅇ료용내ㅁㄴㅇㄹ용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
    },
  ]);

  const nextId = useRef(3);

  const onCreate = () => {
    const board = {
      id: nextId.current,
      text,
      title,
      content,
    };
    setBoards(boards.concat(board));

    setInputs({
      text: "",
      title: "",
      content: "",
    });
    nextId.current += 1;
  };

  return (
    <Container>
      <Board>게시판</Board> <Horizon />
      <BoardContainer>
        {boards.map((contents) => (
          <Link to="/test" key={contents.id}>
            <BoardItem
              no={contents.id}
              title={contents.title}
              name={contents.name}
              content={contents.content}
            />
          </Link>
        ))}
      </BoardContainer>
      <Create>
        <CreateButton />
      </Create>
    </Container>
  );
};

export default MainBoard;

const Container = styled.div`
  height: 100vh;
  width: 1903px;
  background-color: gray;
  padding: 20px 30px;
`;

const Board = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 700;
`;

const Horizon = styled.hr`
  margin-top: 20px;
`;

const BoardContainer = styled.div``;

const Create = styled.div`
  position: sticky;
  top: 800px;
  display: flex;
  justify-content: flex-end;
  width: 1850px;
`;
