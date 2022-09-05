// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtwsIft9BS24yfM0qAJ7VUBfE4rIXEdrM",
    authDomain: "tokoposter-59447.firebaseapp.com",
    projectId: "tokoposter-59447",
    storageBucket: "tokoposter-59447.appspot.com",
    messagingSenderId: "660302277836",
    appId: "1:660302277836:web:a607e85e507db70a682669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

logout.addEventListener('click',(e)=>{

signOut(auth).then(() => {
// Sign-out successful.
document.getElementById("profile").style.display="none";
document.getElementById("tablogin").style.display="inline";
alert('loged out');
}).catch((error) => {
// An error happened.
const errorCode = error.code;
const errorMessage = error.message;

    alert(errorMessage);
});

});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("profile").style.display="inline";
        document.getElementById("tablogin").style.display="none";
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const uid = user.uid;
        //bla bla bla
        // ...
    } else {
        // User is signed out
        // ...
        //bla bla bla
    }
});