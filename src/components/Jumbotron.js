import React from "react"
import { Jumbotron as Jumbo, Container } from "react-bootstrap"
import styled from "styled-components"
import background from "../assets/food_photo_files/background.jpg"

const Styles = styled.div`
  .jumbotron{
    background: url(${background}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;  
  }

  .overlay{
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;  
  }
`

function Jumbotron() {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Jumbo Yo</h1>
        </Container>
      </Jumbo>
    </Styles>
  )
}

export default Jumbotron
