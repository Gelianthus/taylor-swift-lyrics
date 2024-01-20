import React from "react";
import "./globals.css";
import selectSong from "./songs";

function Lyrics({ song, customStylesObj }) {
	const selectedSong = selectSong(song);
	const { wrapper, title, line_container, lines } = customStylesObj;

	return (
		<div className={wrapper.length < 1 ? "p-8" : wrapper}>
			{selectedSong.length > 0 && (
				<React.Fragment>
					<p
						className={title.length < 1 ? "text-2xl mb-6 font-semibold" : title}
					>
						{selectedSong[0].title}
					</p>
					<div className={line_container.length < 1 ? "" : line_container}>
						{selectedSong[0].lyrics.map((str, index) => (
							<p
								className={lines.length < 1 ? "my-4" : lines}
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
				<p className={title.length < 1 ? "text-2xl mb-6 font-semibold" : title}>
					SONG NOT FOUND
				</p>
			)}
		</div>
	);
}

export default Lyrics;
