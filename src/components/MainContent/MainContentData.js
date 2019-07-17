//possibly createButton or createCard.
import React from "react";



export default function CreateCard(dataArray){
    return(
        <div>
            {/* {create img, imgTitle, and imgInfo. Possiply imgDate.} */}
            {/* <img alt='Nasa space img' src={dataArray.media_type} /> */}
            <p>{dataArray}</p>
        </div>
)}