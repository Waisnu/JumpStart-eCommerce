import { Container } from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/Footer";
import React from 'react'


const App = () => {
  return (
     <>

     <Header/>
      <main className='py-3'>
        <container>
          <h1>Welcome to ProShop</h1>
        </container>
      </main>
      <Footer/>
     
        

     </>
  )
}

export default App