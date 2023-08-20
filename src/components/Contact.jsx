import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1ecec;
`;
const Content = styled.div`
  background-color: white;
  width: 80%;
  padding: 50px;
`;
const Title = styled.h2``;
const Subtitle = styled.p``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.label`
  margin: 10px 0px;
`;
const Input = styled.input`
  background-color: #d9eded;
  border: none;
  height: 30px;
  padding: 10px;
`;
const Select = styled.select`
  background-color: #d9eded;
  border: none;
  height: 50px;
`;
const Option = styled.option``;
const Textarea = styled.textarea`
  background-color: #d9eded;
  border: none;
`;
const Button = styled.button`
  width: 100px;
  margin: 20px 0px;
`;

export const Contact = () => {
  return (
    <Container>
      <Content>
        <Title>We are here to bring your vision to life</Title>
        <Subtitle>Contact us below and let's start working together</Subtitle>
        <Form>
          <Label for="name">Name</Label>
          <Input type="text" id="name" required />
          <Label for="email">Email</Label>
          <Input type="email" id="email" required />
          <Label for="contact">Contact No</Label>
          <Input type="number" id="contact" required />
          <Label for="service">Service</Label>
          <Select name="service" id="service" required>
            <Option value="2D Design">2D Design</Option>
            <Option value="3D Design">3D Design</Option>
          </Select>
          <Label for="message">Message</Label>
          <Textarea type="textarea" id="message" rows="4" cols="24" />
          <Button>Submit</Button>
        </Form>
      </Content>
    </Container>
  );
};
