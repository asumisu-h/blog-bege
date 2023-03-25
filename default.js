// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxo5DKt1Yj-DrrMyrMcpVsdJ3V76zKsRE",
  authDomain: "blog-vege-13663.firebaseapp.com",
  databaseURL: "https://blog-vege-13663-default-rtdb.firebaseio.com",
  projectId: "blog-vege-13663",
  storageBucket: "blog-vege-13663.appspot.com",
  messagingSenderId: "866171403614",
  appId: "1:866171403614:web:51a0f526b69abd7a19a3cf",
  measurementId: "G-YXCYW8V645"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


export function upload(){
  alert("ボタンがクリックされました");
  const image=document.getElementById('image').files[0];
  const imageName=image.name;
  const storage=getStorage();
  const storageRef= ref(storage,imageName);
  const uploadTask = uploadBytes(storageRef, file);

  const imageRef=ref(storage,'images');
  const anyImagesRef=ref(storage,'images/*');
  imageRef.name === anyImagesRef.name;
  imageRef.fullPath === anyImagesRef.fullPath;


};

