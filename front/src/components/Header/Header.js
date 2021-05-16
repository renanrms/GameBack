import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Styles from './header.module.css'
import Person from '../assets/person.svg'

function Header({projectPath}) {
    return (
        <Navbar bg="light" expand="lg" className={Styles.navbar}>
            <Link to="/">
                <Navbar.Brand>GameBack</Navbar.Brand>
            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={projectPath}>Meu Projeto</Nav.Link>
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