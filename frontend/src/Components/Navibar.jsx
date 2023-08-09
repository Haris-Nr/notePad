import React, { useEffect } from 'react'
import { Button, Container, Form, Nav, NavDropdown,Navbar } from 'react-bootstrap'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
const Navibar = () => {
let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    console.log(location)
  }, [location]);
  
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/login")
  } 
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
    <Container fluid>
      <NavLink to="/" className='navbar-brand'>INoteBook</NavLink>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <NavLink to="/" className='nav-link'>Home</NavLink>
        
          <NavLink to="/about" className='nav-link'>About</NavLink>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href='#' >Action</NavDropdown.Item>
            <NavDropdown.Item href='#'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#'>
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='#'>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          {!localStorage.getItem('token')? <div className='d-flex'>
          <Link className='btn btn-primary mx-1' to="/login">Login</Link>
          <Link className='btn btn-success mx-1' to="/signup">Signup</Link>
          </div>: <Button onClick={handleLogout} variant="primary" type="submit">
        Logout
      </Button>}
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navibar