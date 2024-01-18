import Lyrics from "./Lyrics";
import React from "react";

function TaylorSwiftLyrics({ song, customStyles }) {
	const { wrapper, title, line_container, lines } = customStyles;

	return (
		<Lyrics
			song={song}
			customStylesObj={{
				wrapper: wrapper || "p-8",
				title: title || "text-2xl mb-8 font-semibold",
				line_container: line_container || "space-y-4",
				lines: lines || "",
			}}
		/>
	);
}

export default TaylorSwiftLyrics;
