//return for createButton or more probably createCard. 
//needs to take props and pass downward to MainContentData
//needs to return MainContentData back toward App to use the API

//step1: import/export ez
//step2 useState/useEffect

import React, { useEffect, useState } from "react";
import CreateCard from "./MainContentData";

import axios from "axios";

function MainContent(){

    const [datas, setDatas] = useState([])

    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=zMLaVB0wFViGnOVLw88A9RYjkCdANZMDiHbh2YDt')
            // console.log('https://api.nasa.gov/planetary/apod?api_key=zMLaVB0wFViGnOVLw88A9RYjkCdANZMDiHbh2YDt')
            .then(response => {
                const dataArray = response.data
                console.log(dataArray)
                setDatas(dataArray)
            })
            .catch(error => 
                console.log('Yo axios broked: ', error))

    },[])

    return (
        <div>
            {datas.map(value => {
                return (<div>
                    <CreateCard  data={value} />
                </div>)
            })}
        </div>
    )}
    console.log('CreateCard: ', CreateCard)

export default MainContent