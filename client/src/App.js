import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import React from 'react'



const App = () => {
  return (
     <>

     <Header/>
      <main className='py-3'>
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
     
        

     </>
  )
}

export default App 