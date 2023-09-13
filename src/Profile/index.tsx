import { useRef } from "react"
import "./profile.css"
import html2canvas from 'html2canvas';
import logo from "../../public/Group 7.svg"
import Card from "../components/Card";
import Button from "../components/Button";

const Profile = () => {
    const captureRef = useRef<HTMLDivElement | null>(null);
    const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);

    const handleDownloadClick = () => {
        const downloadLink = downloadLinkRef.current;
        if (captureRef.current && downloadLink) {
            html2canvas(captureRef.current).then(function (canvas) {
                const url = canvas.toDataURL("image/png");
                downloadLink.href = url;
                downloadLink.download = 'profile.png';
                downloadLink.style.display = 'none';
                downloadLink.click();
            });
        }
    };


    return (
        <div className="profile-container">
            <Card captureRef={captureRef} />
            <a ref={downloadLinkRef} style={{ display: 'none' }}>Download Image</a>
            <div className="profile-button-wrap">
                <Button handleClick={handleDownloadClick} children="Download" type="filled" />
                <Button handleClick={handleDownloadClick} children="Download" type="out-line" />
            </div>
        </div>

    )
};

export default Profile;