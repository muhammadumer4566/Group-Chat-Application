import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
}
    from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDkRJQUvhHJP2b1aCdJmJZjVLJ93GWQHvs",
    authDomain: "umer-chit-chat-app.firebaseapp.com",
    projectId: "umer-chit-chat-app",
    storageBucket: "umer-chit-chat-app.appspot.com",
    messagingSenderId: "481077957316",
    appId: "1:481077957316:web:26758fae80ca9d0e4c2f91",
    measurementId: "G-DLQ3S99RYX"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInbtn = document.getElementById("signInbtn");
const currentPageName = window.location.pathname.split("/").pop();

const loginwithGooglebtn = document.getElementById("loginwithGooglebtn");


const onLoad = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (currentPageName !== "chatapp.html") {
                window.location.href = "chatapp.html"
            }
            console.log(user)
        } else {

            if (currentPageName !== "index.html" && currentPageName !== "") {
                window.location.href = "index.html"
            }

            console.log("User Is not Logged In!")
        }
    });
}

onLoad()


const signInwithGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
        .then((result) => { })
        .catch((error) => { });
};

const signIn = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = "chatapp.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Incorrect email and password");

        });

};

signInbtn && signInbtn.addEventListener("click", signIn);
loginwithGooglebtn && loginwithGooglebtn.addEventListener("click", signInwithGoogle);
