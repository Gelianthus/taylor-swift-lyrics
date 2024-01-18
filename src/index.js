import Lyrics from "./Lyrics";
import React from "react";

function TaylorSwiftLyrics({ song, customStyles }) {
	return (
		<Lyrics
			song={song}
			customStylesObj={
				customStyles || {
					wrapper: "p-8",
					title: "text-2xl mb-8 font-semibold",
					line_container: "space-y-4",
					lines: "",
				}
			}
		/>
	);
}

export default TaylorSwiftLyrics;
