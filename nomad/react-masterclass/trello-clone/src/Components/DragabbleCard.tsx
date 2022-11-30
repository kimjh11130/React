import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled, { keyframes } from "styled-components";
import { toDoState } from "../atoms";
import{ useSetRecoilState } from "recoil"

interface IDragabbleCard {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DragabbleCard = ({ toDoId, toDoText, index }: IDragabbleCard) => {
  const setToDos = useSetRecoilState(toDoState)
  const onDelete = () => {
    setToDos(allboards => {
      console.log(allboards)
      return{
        ...allboards
      }
    })
  };
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
          <Delete onClick={onDelete}>X</Delete>
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragabbleCard);

const Card = styled.div<{ isDragging: boolean }>`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 25px rgba(0, 0, 0, 0.05)" : "none"};
  &:hover span {
    display: inline-block;
  }
`;

const Animation = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.4;
  }
  100%{
    opacity: 0.8;
  }
`;

const Delete = styled.span`
  display: none;
  animation: ${Animation} 0.3s ease-in-out;
`;
