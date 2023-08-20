import styled from "styled-components";
import Work from "./Work";

const Container = styled.div`
  background-color: #f1ecec;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
`;
const Info1 = styled.div`
  width: 30%;
  padding: 50px;
`;
const Info2 = styled.p``;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1``;
const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const Works = () => {
  return (
    <Container>
      <Top>
        <Image src="robo1.jpg" />
        <Info1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but a
        </Info1>
      </Top>
      <Bottom>
        <Heading>
          <Title>Design anything in 3D and 2D</Title>
          <Info2>
            Whatever you want to create, you can add an edge to it with 3D and
            2D. We have built many designs in 3D and 2D to help you deliver
            value, fast.
          </Info2>
        </Heading>
        <Content>
          <Work
            title="3D Models Design"
            info="Create impressive 3D models for your animation and games."
          />
          <Work
            title="3D Models Design"
            info="Create impressive 3D models for your animation and games."
          />
          <Work
            title="3D Models Design"
            info="Create impressive 3D models for your animation and games."
          />
          <Work
            title="3D Models Design"
            info="Create impressive 3D models for your animation and games."
          />
        </Content>
      </Bottom>
    </Container>
  );
};
