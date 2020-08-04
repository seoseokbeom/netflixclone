/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import one from "../../images/playMovie/one.jpg";
import two from "../../images/playMovie/two.jpg";
import three from "../../images/playMovie/three.jpg";
import four from "../../images/playMovie/four.jpg";
import five from "../../images/playMovie/five.jpg";
import six from "../../images/playMovie/six.jpg";
// https://github.com/seoseokbeom/netflixclone.git
const content = [one, two, three, four, five, six];

const ContentRow = () => {
	return (
		<div
			className="ContentRow"
			css={css`
				/* margin-top: -100px; for exact positioning */
				/* position: absolute; */
				/* position: relative; */
				position: relative;
				/* width: 100%;
				 */
				/* height: 400px; */
				overflow-x: scroll;
				::-webkit-scrollbar {
					display: none;
				}
				z-index: 2;
				padding: 30px;
				margin-top: -200px;
				/* padding-bottom: 50px; */
				overflow: auto;
			`}
		>
			<h2>New Episodes</h2>
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
