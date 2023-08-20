import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 400px;
  padding: 10px;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Title = styled.h2``;
const Info = styled.p``;

function Work({ title, info }) {
  return (
    <Container>
      <Image src="robo1.jpg" />
      <Title>{title}</Title>
      <Info>{info}</Info>
    </Container>
  );
}

export default Work;
