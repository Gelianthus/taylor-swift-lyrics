# taylor-swift-lyrics

Generate a customizable React component of Taylor Swift's song's lyrics.

## NOTES

The package type is commonJS, applications with type:module such as vite apps will run into some errros. I am currently working out a solution.

So far, songs from Reputation album are the only available songs.

## HOW TO USE

### Installation

```
npm i taylor-swift-lyrics
```

### Import TaylorSwiftComponent component from the package

```jsx
import TaylorSwiftLyrics from "taylor-swift-lyrics";
```

### Passed the title of the desired song as a String. All lowercase, replace whitespace with underscore, and omit all quotations.

> example: Don't Blame Me = dont_blame_me

```jsx
import TaylorSwiftLyrics from "taylor-swift-lyrics";

function SomePage() {
	return <TaylorSwiftLyrics song={"so_it_goes"} />;
}
```

### Adding custom styles

This is completely optional.

The lyric component is consists of four customizable elements that comes with a default classNames.

1. wrapper: "p-8"

2. title: "text-2xl mb-8 font-semibold"

3. line_container: "space-y-4"

4. lines: ""

Passed your desired styles as an object to the customStyles prop. You can use TailwindCSS utility classes if you'd like. Visit TailwindCSS [here](https://tailwindcss.com/) to view all available utility classes.

```jsx
import TaylorSwiftLyrics from "taylor-swift-lyrics";

function SomePage() {
	const yourDesiredStyles = {
		wrapper: "",
		title: "",
		line_container: "",
		lines: "",
	};
	return (
		<TaylorSwiftLyrics
			song={"so_it_goes"}
			customStyles={yourDesiredStyles}
		/>
	);
}
```

```jsx
// You can select which element to customize
// wrapper, line_container, and lines will retain their default classNames
function SomePage() {
	return (
		<TaylorSwiftLyrics
			song={"so_it_goes"}
			customStyles={{ title: "font-bold text-neutral-800" }}
		/>
	);
}
```

## Expected result with default style option

![Lyric Component Example](public/images/screencapture-localhost-3000-2024-01-20-11_52_39.png)

## Non-profitable and has no connection to Taylor Swift
