import React, { Component } from 'react'
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

class NavbarCompontent extends Component {
  state = {
    search: ""
  }

  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
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
                onChange={
                  element => this.setState({search: element.target.value},
                    () => this.props.onSearching(this.state.search))
                }
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavbarCompontent