import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Button , Form, FormControl} from 'react-bootstrap'

const Header = () => {
  return (
    <>
     <Navbar bg="primary" expand='lg' variant="light" className='square bg-primary rounded-pill'>
      <Container>
        <img href="#home" src='./a.jpg' width={'27'} height={'27'}/>
        <Navbar.Brand href="#home" style={{fontWeight: 'bold'}}>𝓝𝓸𝓽𝓮𝓹𝓪𝓭𝓮</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'> 
            <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          </Nav>
       
          <Nav >
            <Nav.Link href="#home" style={{fontWeight: 'bold'}}>My Notes</Nav.Link>

            <NavDropdown title="JigarJoshi" id="collasible-nav-dropdown" style={{fontWeight: 'bold'}}>
              <NavDropdown.Item href="#action/3.1" style={{fontWeight: 'bold'}}>My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{fontWeight: 'bold'}}>
                Log-Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    <br />
    </>
  )
}

export default Header
