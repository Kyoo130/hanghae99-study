import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
// 숨김
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export{auth, apiKey};