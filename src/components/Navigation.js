import React, { Component } from "react";
import { nav, navBar, Navbar, Nav } from "react-bootstrap"
import styled from 'styled-components'

const Styles = styled.div`
  .navbar{
    background-color: #e6f5e3;
  }

  .navbar-brand, .navbar-nav .nav-link{
    color: #black;

    &:hover {
      font-size: larger;
    }
  }
`

function Navigate() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Everyday Eatts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/recipe">Recipes</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/about">About Me</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default Navigate
