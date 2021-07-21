import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCXNzHb9IO_9UTWKl_qUpLElPCRXiO4G_8",
	authDomain: "react-osyaretodo.firebaseapp.com",
	projectId: "react-osyaretodo",
	storageBucket: "react-osyaretodo.appspot.com",
	messagingSenderId: "54678949766",
	appId: "1:54678949766:web:71b64d9d801de754a4e607",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
