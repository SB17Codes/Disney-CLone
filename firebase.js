import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOcv_MosppZ3_BdrCH5c74mHiOxCQCxXE",
  authDomain: "disney-clone-8b143.firebaseapp.com",
  projectId: "disney-clone-8b143",
  storageBucket: "disney-clone-8b143.appspot.com",
  messagingSenderId: "365663382225",
  appId: "1:365663382225:web:95c474d1ffb40ff4ccf3f0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
