import Character from "../../images/playMovie/netflixCharacter.png";
import React from "react";
import { Dropdown } from "semantic-ui-react";
// import "../../images/playMovie/";

const friendOptions = [
	{
		key: "Seo",
		// text: "Seo",
		value: "Seo",
		image: {
			// avatar: true,
			src: Character,
			maxWidth: 30,
		},
	},
	{
		key: "Account",
		text: "Account",
		value: "Account",
		// image: { avatar: true, src: "../../" },
	},
	{
		key: "Help Center",
		text: "Help Center",
		value: "Help Center",
		// image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
	},
	{
		key: "Sign out of netflix",
		text: "Sign out of netflix",
		value: "Sign out of netflix",
		// image: { avatar: true, src: "/images/avatar/small/christian.jpg" },
	},
];

const Dropdown2 = () => (
	<span>
		{/* Show me posts by{" "} */}
		<Dropdown
			inline
			options={friendOptions}
			defaultValue={friendOptions[0].value}
			simple
			item
		/>
	</span>
);

export default Dropdown2;
