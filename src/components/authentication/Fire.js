import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyCRXZMOAE68tgykxllsGulahaaPijrDCwc",
	authDomain: "netflixclone-1bd30.firebaseapp.com",
	databaseURL: "https://netflixclone-1bd30.firebaseio.com",
	projectId: "netflixclone-1bd30",
	storageBucket: "netflixclone-1bd30.appspot.com",
	messagingSenderId: "19195978553",
	appId: "1:19195978553:web:17eb64d7f25940206cfee8",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
