import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  background-color: white;
  padding: 10px;
  margin: 20px;
  border-radius: 2%;
`;
const Top = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;
const Title = styled.h2`
  text-align: left;
`;

const SubImage = styled.img`
  position: absolute;
  bottom: -10px;
  right: 20px;
  border-radius: 50%;
`;
const Rating = styled.div`
  text-align: left;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Time = styled.div``;
const Price = styled.div``;

export const Course = (props) => {
  return (
    <Container>
      <Top>
        <Image src={props.image} />
        <SubImage src={props.subImage} />
      </Top>
      <Title>{props.title}</Title>
      <Rating>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
      </Rating>
      <Info>
        <Time>{props.time}</Time>
        <Price>{props.price}</Price>
      </Info>
    </Container>
  );
};
