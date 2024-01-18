import React from "react";
import "./globals.css";
import selectSong from "./songs";

function Lyrics({ song, customStylesObj }) {
	const selectedSong = selectSong(song);
	const { wrapper, title, line_container, lines } = customStylesObj;

	return (
		<div className={`${wrapper ? wrapper : "p-8"}`}>
			{selectedSong.length > 0 && (
				<React.Fragment>
					<p className={`${title ? title : "text-2xl mb-8 font-semibold"} `}>
						{selectedSong[0].title}
					</p>
					<div className={`${line_container ? line_container : "space-y-4"} `}>
						{selectedSong[0].lyrics.map((str, index) => (
							<p
								className={`${lines ? lines : ""} `}
								key={index}
							>
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
			{selectedSong.length < 1 && (
				<p className={`${lines ? lines : "text-center text-2xl"} `}>
					SONG NOT FOUND
				</p>
			)}
		</div>
	);
}

export default Lyrics;
