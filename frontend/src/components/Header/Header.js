import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Button , Form, FormControl} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const Navigate = useNavigate()


  return (
    <>
     <Navbar bg="dark" expand='lg' variant="dark"  className="square bg-dark rounded"  style={{marginBottom:'0%', fontSize:'large'}}   >
      <Container>
        <img href="#home" src='./a.jpg' width={'30'} height={'30'}/>
        <Navbar.Brand style={{fontWeight: 'bold',fontSize:'x-large'}}>
          <Link to='/'> 𝓝𝓸𝓽𝓮𝓹𝓪𝓭𝓮</Link>
          
         </Navbar.Brand>
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
            <Nav.Link href="#home" style={{fontWeight: 'bold'}}>
              <Link to='mynotes'>My Notes</Link>
              </Nav.Link>

            <NavDropdown title="JigarJoshi" id="collasible-nav-dropdown" style={{fontWeight: 'bold'}}>
              <NavDropdown.Item href="#action/3.1" style={{fontWeight: 'bold'}}>My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{localStorage.removeItem("userInfo");

              Navigate("/")

            }}   style={{fontWeight: 'bold'}}>
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
