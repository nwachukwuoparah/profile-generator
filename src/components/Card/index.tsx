import { cardType } from "../type.check";
import "./card.css"
import React from "react"
import image from "../../../public/_Downloader 6.png"
import logoblack from "../../../public/Logo.svg"
import facebook from "../../../public/facebook.svg"
import linkdin from "../../../public/linkedin.svg"
import instagram from "../../../public/instagram.svg"
import twitter from "../../../public/twitter.svg"


const Card: React.FC<cardType> = ({ value, captureRef }) => {


    return (
        <div
            ref={captureRef}
            className="card"
        >
            <div className="circle"></div>
            <div className="card-contain">
                <img src={logoblack} alt="image" />
                <div className="image-contain">
                    <img src={value?.profilePicture} alt="image" />
                </div>
                <h3>{value?.fullName}</h3>
                <p>The Curve Africa Cohort 3</p>
                <h5>{value?.stack}</h5>
            </div>
            <div className="socials">
                <span>
                    <img src={facebook} alt="image" />
                    <img src={linkdin} alt="image" />
                    <img src={instagram} alt="image" />
                    <img src={twitter} alt="image" />
                </span>
                <p>@ t h e c u r v e a f r i c a</p>
            </div>
        </div>
    )
};

export default Card;
