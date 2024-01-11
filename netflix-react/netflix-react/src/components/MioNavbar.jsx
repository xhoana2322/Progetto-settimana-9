import React from 'react'
import { Navbar, Nav } from "react-bootstrap";


export default function MioNavbar() {
  return (
    <>
     <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#221f1f"}}>
      
      <Navbar.Brand href="#home">
           <img 
            alt=""
            src="/netflix_logo.png"
            style= {{ width: "100px"}}
            className="d-inline-block align-top logo"
            /> 
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#" className='active'>Tv Show</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div>

        </div>

    </Navbar>


    </>
  )
}
