import './App.css'
import { Contact } from './components/Contact'
import { Courses } from './components/Courses'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Works } from './components/Works,'

import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
    <Container>
      <Navbar/>
      <Home/>
      <Courses/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
