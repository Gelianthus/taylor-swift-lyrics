import React, { useEffect, useState } from "react";
import "./globals.css";

function Lyrics({ song }) {
	const [songData, setSongData] = useState(null);
	const [fetchStatus, setFetchStatus] = useState("loading");

	useEffect(() => {
		const fetchSong = async () => {
			try {
				const res = await fetch(`/songs/${song}.json`);
				if (!res.ok) {
					if (res.status === 404) {
						setSongData(null);
						setFetchStatus("not-found");
					} else {
						setSongData(null);
						setFetchStatus("failed");
					}
				}
				const data = await res.json();
				setSongData(data);
				setFetchStatus("success");
			} catch (error) {
				setSongData(null);
				setFetchStatus("failed");
			}
		};
		fetchSong();
	}, []);

	return (
		<div className="p-8">
			{fetchStatus === "loading" && <p className="text-center">Loading...</p>}
			{fetchStatus === "success" && (
				<React.Fragment>
					<p className="text-2xl mb-8 font-semibold">{songData.title}</p>
					<div className="space-y-4">
						{songData.lyrics.map((str, index) => (
							<p key={index}>
								{str.split("<BREAKER>").map((line, index) => (
									<React.Fragment key={index}>
										{line}
										{index < str.split("<BREAKER>").length - 1 && <br />}
									</React.Fragment>
								))}
							</p>
						))}
					</div>
				</React.Fragment>
			)}
			{fetchStatus === "not-found" && (
				<p className="text-center text-2xl">Song not found.</p>
			)}
			{fetchStatus === "failed" && (
				<p className="text-center text-2xl">
					An error occured while fetching song data.
				</p>
			)}
		</div>
	);
}

export default Lyrics;
