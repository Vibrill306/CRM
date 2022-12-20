import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import logo from '../../assests/img/logo-3d.png'

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
        <Navbar.Brand>
            <img src={logo} alt="logo" width="60"/>
        </Navbar.Brand>
        <Navbar.Toggle 
        aria-controls='basic-navbar-nav'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ms-auto">
                <Nav.Link href="/dashboard">dashboard</Nav.Link>
                <Nav.Link href="/dashboard">Tickts</Nav.Link>
                <Nav.Link href="/dashboard">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}