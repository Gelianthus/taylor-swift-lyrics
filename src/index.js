import Lyrics from "./Lyrics";
import "./globals.css";
import React from "react";

function TaylorSwiftLyrics({ song, customStyles = {} }) {
	const {
		wrapper = "p-8",
		title = "text-2xl mb-4 font-semibold",
		line_container = "space-y-4",
		lines = "",
	} = customStyles;

	return (
		<Lyrics
			song={song}
			customStylesObj={{
				wrapper: wrapper,
				title: title,
				line_container: line_container,
				lines: lines,
			}}
		/>
	);
}

export default TaylorSwiftLyrics;
