import React, { useRef } from "react"
import html2canvas from 'html2canvas';
import Card from "../components/Card";

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
        <div style={{ width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center" }}>
            <Card captureRef={captureRef} />
            <a ref={downloadLinkRef} style={{ display: 'none' }}>Download Image</a>
            <button className="" onClick={handleDownloadClick}>Generate Download</button>
        </div>

    )
};

export default Profile;
