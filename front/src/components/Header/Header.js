import React from 'react'
import Person from './assets/person.svg'
import Styles from './header.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header({projectPath}) {
    return (
        <Navbar bg="light" expand="lg" className={Styles.navbar}>
            <Navbar.Brand href="home">GameBack</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="home">Meu Projeto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <NavDropdown title={ <img src={Person} alt=""/> } id="basic-nav-dropdown">
                <NavDropdown.Item href="profile">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="preferences">Preferências</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="logout">Sair</NavDropdown.Item>
            </NavDropdown>
            <div ></div>
        </Navbar>        
    );
  }
  
export default Header;