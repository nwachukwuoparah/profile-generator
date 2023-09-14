import { useEffect, useRef, useState } from "react"
import "./profile.css"
import html2canvas from 'html2canvas';
import Card from "../components/Card";
import Button from "../components/Button";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../components/Api/query";

const Profile = () => {
    const captureRef = useRef<HTMLDivElement | null>(null);
    const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);
    const [img, setImg] = useState<string>("")


    const handleDownloadClick = () => {
        const downloadLink = downloadLinkRef.current;
        if (captureRef.current && downloadLink) {
            html2canvas(captureRef.current)
                .then(function (canvas) {
                    const url = canvas.toDataURL("image/png");
                    downloadLink.href = url;
                    downloadLink.download = 'profile.png';
                    downloadLink.style.display = 'block';
                    setImg(url)
                })
                .catch(function (error) {
                    console.error('Error generating image:', error);
                });
        }
    };


    useEffect(() => {
        console.log(downloadLinkRef)

    }, [downloadLinkRef])
    const {
        data,
        isFetching,
    } = useQuery(["getUser"], getUser, {
        enabled: !!localStorage.getItem("token"),
        refetchOnWindowFocus: false,
        onError: (error) => {
            console.log(error);
        },
    });
    useEffect(() => {
        console.log(isFetching);
        console.log(data?.data?.data)
    }, [isFetching])

    return (
        <div className="profile-container">
            {!img && <Card value={data?.data?.data} captureRef={captureRef} />}
            {img && <img style={{
                width: "38.1%",
                height: 523,
                marginTop: 80
            }} src={img} />}
            <div className="profile-button-wrap">
                {!img && <Button handleClick={handleDownloadClick} children="Generate" type="filled" />}
                {!img && <Button handleClick={handleDownloadClick} children="Edit" type="out-line" />}
                <a ref={downloadLinkRef} style={{ display: 'none' }}><Button children="Download" type="filled" /></a>
                {/* {img && <Button handleClick={() => setImg("")} children="Back" type="out-line" />} */}
            </div>
        </div>

    )
};

export default Profile;