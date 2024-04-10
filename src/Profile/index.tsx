import { useRef, useState } from "react";
import "./profile.css";
import html2canvas from "html2canvas";
import Card from "../components/Card";
import Button from "../components/Button";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../components/Api/query";
import Edit_profile from "../Edit-profile";

const Profile = () => {
	const captureRef = useRef<HTMLDivElement | null>(null);
	const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);
	const [img, setImg] = useState<string>("");
	const [toggle, setToggle] = useState<boolean>(false);

	const { data } = useQuery(["getUser"], getUser, {
		enabled: !!localStorage.getItem("token"),
		refetchOnWindowFocus: false,
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const handleDownloadClick = () => {
		const html2canvasOptions = {
			allowTaint: true,
			useCORS: true,
		};
		const downloadLink = downloadLinkRef.current;
		if (captureRef.current && downloadLink) {
			html2canvas(captureRef.current, html2canvasOptions)
				.then(function (canvas) {
					const url = canvas.toDataURL("image/png");
					downloadLink.href = url;
					downloadLink.download = `${data?.data?.data.fullName}.png`;
					setImg(url);
				})
				.catch(function (error) {
					console.error("Error generating image:", error);
				});
		}
	};

	const edit = (): void => setToggle(!toggle);

	return (
		<>
			{toggle && <Edit_profile edit={edit} />}
			<div className="profile-container">
				<img src="/ThecurveLogo.svg" className="logo" />
				<div className="profile-button-wrap">
					{!img && <Card value={data?.data?.data} captureRef={captureRef} />}
					{img && <img className="preview-download" src={img} />}
					<a ref={downloadLinkRef} style={{ display: img ? "block" : "none" }}>
						<Button children="Download" type="filled" />
					</a>
					{img && (
						<Button
							handleClick={() => {
								setImg("");
							}}
							children="Back"
							type="out-line"
						/>
					)}

					{!img && (
						<Button
							handleClick={handleDownloadClick}
							children="Generate"
							type="filled"
						/>
					)}
					{!img && (
						<Button handleClick={edit} children="Edit" type="out-line" />
					)}
				</div>
			</div>
		</>
	);
};

export default Profile;
