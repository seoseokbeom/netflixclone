/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import one from "../../images/playMovie/one.jpg";
import two from "../../images/playMovie/two.jpg";
import three from "../../images/playMovie/three.jpg";
import four from "../../images/playMovie/four.jpg";
import five from "../../images/playMovie/five.jpg";
import six from "../../images/playMovie/six.jpg";
const content = [one, two, three, four, five, six];

const ContentRow = () => {
	return (
		<div
			className="ContentRow"
			css={css`
				position: relative;
				overflow-x: scroll;
				::-webkit-scrollbar {
					display: none;
				}
				z-index: 2;
				padding: 30px;
				margin-top: -100px;
				overflow: auto;
				@media only screen and (max-width: 500px) {
					/* display: none; */
					padding-top: 200px;
				}
			`}
		>
			<h2
				css={css`
					font-size: 1.4vw;
					@media only screen and (max-width: 800px) {
						font-size: 14px;
					}
				`}
			>
				New Episodes
			</h2>
			<div
				css={css`
					position: relative;
					display: flex;
				`}
			>
				{content.map((image) => (
					<img
						css={css`
							/* position: absolute; */
							transition: transform 400ms;
							:hover {
								display: block;
								transform: scale(1.4);
							}
							margin-right: 3px;
							object-fit: contain;
							width: 100%;
							max-height: calc(60px + 5vw);
							/* max-height: 188px; */
							margin-right: 3px;
							transition: transform 400ms;
						`}
						src={image}
						key={image}
					/>
				))}
			</div>
		</div>
	);
};

export default ContentRow;
