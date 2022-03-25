import React from 'react'
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

function FunctionNavbar({onSearch}) {

  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">React News API</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={element => onSearch(element.target.value)
              }/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default FunctionNavbar