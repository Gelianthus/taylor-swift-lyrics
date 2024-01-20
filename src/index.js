import Lyrics from "./Lyrics";
import "./globals.css";
import React from "react";

function TaylorSwiftLyrics({ song, customStyles = {} }) {
	const {
		wrapper = "default-wrapper",
		title = "default-title",
		line_container = "",
		lines = "default-lines",
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
