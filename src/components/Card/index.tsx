import { cardType } from "../type.check";
import "./card.css"
import React from "react"
import download from "../../../public/download.jpeg"
import logoblack from "../../../public/Group 7 black.svg"


const Card: React.FC<cardType> = ({ captureRef }) => {




    return (
        <div
            ref={captureRef}
            className="card"
        >
            <div className="circle"></div>
            <div className="circle-contain">
                <img src={logoblack} alt="image" />
                <div className="card-wrap">
                    <img src={logoblack} alt="image" />
                    <h3>Raymond Nkume</h3>
                    <p>The Curve Africa Cohort 3</p>
                    <h5>Front-End Trainee</h5>
                </div>
            </div>

        </div>
    )
};

export default Card;
