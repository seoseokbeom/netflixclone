/** @jsx jsx */
import React, { Component } from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import "font-awesome/css/font-awesome.min.css";
import Icon from "../moviePage/Icon";

const Footer = (props) => (
	<div
		css={css`
			background: ${props.color};
		`}
	>
		<footer
			css={css`
				height: 340px;
				max-width: 980px;
				margin: 0 auto 0;
				padding: 80px 4% 0;
				color: grey;
			`}
		>
			<IconBlock>
				<a href="https://www.facebook.com/NetflixKR" target="_blank">
					<Icon type="facebook" />
				</a>
				<a href="https://www.instagram.com/netflixkr/" target="_blank">
					<Icon type="instagram" />
				</a>
				<a href="https://twitter.com/netflixkr" target="_blank">
					<Icon type="twitter" />
				</a>
				<a
					href="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured"
					target="_blank"
				>
					<Icon type="youtube-play" />
				</a>
			</IconBlock>
			<ul
				className="member-footer-links"
				css={css`
					line-height: 1.2;
					margin: 0 0 14px 0;
				`}
			></ul>
			<div className="member-footer-service">
				<button
					onClick={() => props.serviceClick()}
					className="service-code"
					css={css`
						margin-bottom: 20px;
						font-size: 13px;
						padding: 0.5em;
					`}
				>
					{props.serviceCode ? props.serviceCode : "Service Code"}
					{/* Service Code */}
				</button>
			</div>
			<div
				class="member-footer-copyright"
				css={css`
					font-size: 13px;
					a {
						text-decoration: none;
					}
				`}
			>
				<div class="copy-text">
					<div class="copy-text-block">
						Netflix Services Korea Ltd. E-Commerce Registration Number: Je
						2018-Seoul Jong-ro-0426 Ho. Phone: 00-308-321-0161
					</div>
					<div class="copy-text-block">
						Representative: Reginald Shawn Thompson
					</div>
					<div class="copy-text-block">Email: korea@netflix.com</div>
					<div class="copy-text-block">
						Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro,
						Jongno-gu, Seoul, 03161 Republic of Korea
					</div>
					<div class="copy-text-block">Hosted by: Amazon Web Services Inc.</div>
					<div id="" class="copy-text-block" data-uia="">
						<a
							href="http://www.ftc.go.kr/www/bizCommView.do?key=232&apv_perm_no=2018300016930200431&pageUnit=10&searchCnd=bup_nm&searchKrwd=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4&pageIndex=1"
							target="_blank"
						>
							Link to KFTC website
						</a>
					</div>
				</div>
				<span class="member-footer-copyright-instance"></span>
			</div>
		</footer>
	</div>
);

const IconBlock = styled.div`
	margin-bottom: 30px;
	.Icon {
		font-size: 35px;
		margin-right: 20px;
		color: grey;
	}
`;

export default Footer;
