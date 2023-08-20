import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;
    background-color: #f1ecec;
`
const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 30px;
`
const ListItem = styled.li`
    &:hover{
        cursor: pointer;
    }
`
const Logo = styled.img`
    
`

export const Navbar = () => {
  return (
    <Container>
        <Logo src="./vite.svg" />
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Courses</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
        </List>
    </Container>
  )
}
