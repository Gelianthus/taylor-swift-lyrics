import Lyrics from "./Lyrics";
import React from "react";

function TaylorSwiftLyrics({ song, customStyles = {} }) {
	const {
		wrapper = "p-8",
		title = "text-2xl mb-8 font-semibold",
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
