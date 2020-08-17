import Character from "../../images/playMovie/netflixCharacter.png";
import React from "react";
import { Dropdown } from "semantic-ui-react";

const friendOptions = [
	{
		key: "Seo",
		value: "Seo",
		image: {
			src: Character,
			maxWidth: 30,
		},
	},
	{
		key: "Account",
		text: "Account",
		value: "Account",
	},
	{
		key: "Help Center",
		text: "Help Center",
		value: "Help Center",
	},
	{
		key: "Sign out of netflix",
		text: "Sign out of netflix",
		value: "Sign out of netflix",
	},
];

const Dropdown2 = () => (
	<span>
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
