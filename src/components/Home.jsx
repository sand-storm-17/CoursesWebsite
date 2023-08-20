
import styled from "styled-components";

const Scaffold = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f1ecec;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 1280px;
    height: 50%;
    margin-top: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h1``
const Para = styled.p``
const Button = styled.button``
const Right = styled.div`
    flex: 1;
    padding: 50px;
`
const Image = styled.img`
    width: 100%;
`

export const Home = () => {
  return (
    <Scaffold>
    <Container>
        <Left>
            <Title>Learn Courses Online</Title>
            <Para>Technology is Bringing A Massive Wave of Evolution On Learning Things in Different Ways</Para>
            <Button>Get Started</Button>
        </Left>
        <Right>
            <Image src="./vite.svg"/>
        </Right>
    </Container>
    </Scaffold>
  )
}
