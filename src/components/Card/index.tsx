import { cardType } from "../type.check";
import "./card.css"
import React from "react"
import download from "../../../public/download.jpeg"


const Card: React.FC<cardType> = ({ captureRef }) => {
    return (

        <div
            ref={captureRef}
            style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                height: "50%",
                backgroundColor: "blue",
            }}
        >
            <img src={download} alt="image" />
        </div>
    )
};

export default Card;
