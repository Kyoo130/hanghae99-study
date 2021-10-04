import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbFNpene1yEg21kOLGb7LWNzTmgTf-orA",
    authDomain: "image-community-64a78.firebaseapp.com",
    projectId: "image-community-64a78",
    storageBucket: "image-community-64a78.appspot.com",
    messagingSenderId: "20739123014",
    appId: "1:20739123014:web:343cf9b0dc9364fba96747",
    measurementId: "G-L4EW3RZHNW"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export{auth, apiKey};