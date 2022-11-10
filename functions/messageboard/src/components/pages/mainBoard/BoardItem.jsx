import styled from "styled-components";

const BoardItem = ({ no, title, name, content }) => {
  return (
    <Background>
      <Number>N0.{no} </Number>
      <Title>{title}</Title>
      <Contnets>{content.slice(0, 20)}...</Contnets>
      <Name>{name}</Name>
    </Background>
  );
};

export default BoardItem;

const Background = styled.div`
  padding: 10px;
  border: 1px solid gray;
  border-bottom-color: white;
  display: grid;
  grid-template-columns: 0.5fr 1fr 4fr 1fr;
`;

const Span = styled.span`
  color: white;
`;

const Number = styled(Span)``;

const Title = styled(Span)`
  font-weight: 700;
`;

const Name = styled(Span)``;

const Contnets = styled(Span)``;
