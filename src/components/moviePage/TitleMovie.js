/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
// import Button from "./Button";
import { GrPlayFill } from "react-icons/gr";
import wallpaper from "../../images/playMovie/wallpaper.jpg";
import ItsOk from "../../images/playMovie/its_ok_to_not_be_ok.jpg";
// import logo from "../img/logo.png";
import logo from "../../images/playMovie/itsOkLogo.png";
import { BsExclamationCircle } from "react-icons/bs";
import ContentRow from "./ContentRow";
/**
 * @function TitleMovie
 */
const TitleMovie = ({ children }) => (
	<div css={TitleMovieCSS}>
		<div className="synopsis">
			<img className="logo1" src={logo} />
			<div className="supplementary-message">#1 in South Korea Today</div>
			<p className="info1">
				An extraordinary road to emotional healing opens up for an antisocial
				children's book writer and a selfless psych ward caretaker when they
				cross paths.
			</p>
			<button>
				<GrPlayFill className="btnIcons" />
				Play
			</button>
			<button className="button2">
				<BsExclamationCircle className="btnIcons" />
				More Info
			</button>
			{/* C:\Users\kakun\Desktop\github\netflixclone\netflix\src\images\playMovie\sliders1.png */}
			{/* <img className="sliders1" src={sliders1} alt="sliders1" /> */}
			{/* <Button icon="play">Play</Button>
			<Button icon="info-circle">More Info</Button> */}
		</div>
		{children}
	</div>
);

const TitleMovieCSS = css`
  position: relative;
  z-index:-999;  
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent),
		url('${ItsOk}');
    min-height:100%;
    min-width: 100%;
    background-position: center center;
    background-size: cover;
    ${"" /* background-size: contain; */}
    height: auto;
    top: 0;
    left: 0;
  /* background-image:  url('${ItsOk}'); */
  /* background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url('images/background.jpg'); */
  /* background-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100% ) url('${ItsOk}'); */
  ${"" /* background-repeat: no-repeat center fixed;   */}
  ${"" /* object-fit: contain;
  width: 100%; */}
  ${"" /* background-size: 100%; */}
  ${"" /* background-size: cover; */}
  ${"" /* height: 103vh; */}
  top: 0;

 
  .btnIcons {
    margin-right:0.7rem;
    padding-top:0.2rem;
    /* font-weight:200; */
  }

  .button2 {
    background-color: rgba(133,133,133,0.6);
    color:#fff;
  }

   .sliders1 {
     margin-top:100px;
     height:170px;
     width: 1783px;
   }

  .supplementary-message {
    font-size: 1.6vw;
    color: #fff;
    transition: color 1s cubic-bezier(.165,.84,.44,1);
    /* text-shadow: 2px 2px 4px rgba(0,0,0,.45); */
    margin: 1vw 0;
  }
  
  

  .synopsis {

    width: 40%;
    
    padding-top: 200px;
    padding-left: 60px;
    padding-bottom:300px;
    /* max-width: 500px; */
    color: white;
    padding-left: 60px;
    .info1 {

      color: #fff;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    font-size: 1.4vw;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);
    margin-top: .1vw;
    }

    /* img {
    } */

    .logo1 {
      width: 80%;

    }

   .Icon {
      margin-right: 10.5px;
      font-size: 18px;
    }
  }

  .ContentRow {
    ${"" /* position: absolute; */}
    ${"" /* bottom: 20px; */}
  }
`;
export default TitleMovie;
