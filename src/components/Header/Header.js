//attach header
import React from "react";
import logo from './../../img/logo.jpg'
import { Container } from "../../Widgets/StyledEl";

function Header(){
    return (
        <Container>
            <h1>Photo of the Day! Watch the ecplise of the content!</h1>
            <img alt='Nasa-Logo-Img' href='#' src={logo}></img>
        </Container>
    )}

export default Header