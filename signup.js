import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkRJQUvhHJP2b1aCdJmJZjVLJ93GWQHvs",
  authDomain: "umer-chit-chat-app.firebaseapp.com",
  projectId: "umer-chit-chat-app",
  storageBucket: "umer-chit-chat-app.appspot.com",
  messagingSenderId: "481077957316",
  appId: "1:481077957316:web:26758fae80ca9d0e4c2f91",
  measurementId: "G-DLQ3S99RYX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signupbtn = document.getElementById("signupbtn");

const signUp = async (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let Confirmpassword = document.getElementById("Confirmpassword").value;

  // Validate password
  if (password !== Confirmpassword) {
    alert("Password and Confirm Password do not match");
  } else {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile (display name)
      await updateProfile(auth.currentUser, { displayName: name });

      // Now, you can access the updated user with displayName
      const user = userCredential.user;
      console.log("User signed up with displayName:", user.displayName);
      console.log("Your Account has been created successfully!");

      // Redirect or perform other actions here
      window.location.href = "index.html";
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
      alert("please enter valid email and password");
      // Handle errors appropriately
    }
  }
};

signupbtn && signupbtn.addEventListener("click", signUp);
