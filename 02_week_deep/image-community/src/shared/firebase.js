// import firebase from "firebase/app";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
// 정보 숨김
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth };