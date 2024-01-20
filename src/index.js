import Lyrics from "./Lyrics";
import React from "react";

function TaylorSwiftLyrics({ song, customStyles = {} }) {
	const {
		wrapper = "",
		title = "",
		line_container = "",
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
