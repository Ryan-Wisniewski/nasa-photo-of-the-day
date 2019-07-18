//Atach footer
import React from "react";
// import logo from './img/logo.jpg'
import logo from '../../img/logo.jpg'
import { Container } from "../../Widgets/StyledEl";

function Footer(){
    return (
        <Container>
            <h3>Nasa Owns theese photos not me!</h3>
            {/* <img alt='NasaLogo' herf='#' src={logo} /> */}
            <img href='#' src={logo}></img>
        </Container>
    )}

export default Footer