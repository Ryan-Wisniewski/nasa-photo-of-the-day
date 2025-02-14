//return for createButton or more probably createCard. 
//needs to take props and pass downward to MainContentData
//needs to return MainContentData back toward App to use the API

//step1: import/export ez
//step2 useState/useEffect

import React, { useEffect, useState } from "react";

import axios from "axios";
import { ImgStyle } from "../../Widgets/StyledEl";
import {Container} from "../../Widgets/StyledEl";

function MainContent(){

    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [imgs, setImgs] = useState('')
    const [mediaType, setMediaType] = useState('')
    const [text, setText] = useState('')


    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=zMLaVB0wFViGnOVLw88A9RYjkCdANZMDiHbh2YDt')
            // console.log('https://api.nasa.gov/planetary/apod?api_key=zMLaVB0wFViGnOVLw88A9RYjkCdANZMDiHbh2YDt')
            .then(response => {
                const res = response.data
                console.log(res)
                setDate(res.date)
                setTitle(res.title)
                setImgs(res.url)
                setMediaType(res.media_type)
                setText(res.explanation)
            })
            .catch(error => 
                console.log('Yo axios broked: ', error))

    },[])

    return (
        <Container>
            <p>{date}</p>
            <h1>{title}</h1> 
            <ImgStyle >{mediaType === 'video' ? <iframe src={imgs} type='Video'></iframe> : <img src={imgs} /> }</ImgStyle>          
            
            <p>{text}</p>
        </Container>
    )}

export default MainContent