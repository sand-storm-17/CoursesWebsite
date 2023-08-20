import styled from "styled-components";
import { Course } from "./Course";

const Container = styled.div`
  width: 100%;
`;
const Header = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div``;
const Title = styled.h1``;
const SubTitle = styled.h3``;
const Option = styled.option``;
const Selector = styled.select`
  height: 20px;
`;
const Content = styled.div`
  margin: 50px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #afd8d8;
`;

export const Courses = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Title>Featured Courses</Title>
          <SubTitle>Discover Your Perfect Program In Our Courses</SubTitle>
        </Left>
        <Selector name="category" id="category">
          <Option value="1">One</Option>
          <Option value="2">Two</Option>
          <Option value="3">Three</Option>
        </Selector>
      </Header>
      <Content>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
        <Course
          image="./robo1.jpg"
          title="Hello"
          subImage="./vite.svg"
          rating="1"
          time="10hr"
          price="10$"
        ></Course>
      </Content>
    </Container>
  );
};
