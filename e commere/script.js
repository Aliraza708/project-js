  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBjOuL3B3nRaCO9Fo2IvJrkXq3AOdqjg9g",
    authDomain: "my-first-project-8596d.firebaseapp.com",
    projectId: "my-first-project-8596d",
    storageBucket: "my-first-project-8596d.appspot.com",
    messagingSenderId: "549023476953",
    appId: "1:549023476953:web:d356f595e611585e0f62c8",
    measurementId: "G-3LX0PV9JT7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  console.log("auth=>",auth)
  var sign_email = document.getElementById("email")
  var  sign_password = document.getElementById("password")
  var buttonsign = document.getElementById("sigin_in")
  var container = document.getElementById("container")
  var card = document.getElementById("card")
  var logout = document.getElementById("logout")
  var change = document.getElementById("change")
  var Login = document.getElementById("Login")
  var signin = document.getElementById("signin")

  onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("sing in")
         container.style.display = "none";
        card.style.display = "flex"
         card.classList.add("dis")
         logout.style.display = "block"

      const uid = user.uid;
    
    } else {
        
        console.log(" User is signed out")
    
    }
  });
  console.log(app);
  buttonsign.addEventListener("click",function(){
      Login.innerHTML = "Login"
    // console.log("useremail&password",sign_email.value,sign_password.value)
    createUserWithEmailAndPassword(auth, sign_email.value, sign_password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
     
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      
    });
  })
  buttonsign.addEventListener("click",()=>{
    container.classList.add("error")
    change.innerHTML = "Sign Up";
    setTimeout(()=>{
      container.classList.remove("error")
      
    },1000)
  })
  Login.addEventListener("click",()=>{
    container.classList.add("error")
    change.innerHTML = "Login";
    Login.style.display = "none"
    signin.style.display = "flex"
    setTimeout(()=>{
      container.classList.remove("error")
      
    },1000)
    
  })
  signin.addEventListener("click",()=>{
    Login.style.display = "flex";
    signin.style.display = "none";
    change.innerHTML = "Sign up";
    container.classList.add("error")
    setTimeout(()=>{
      container.classList.remove("error")
      
    },1000)
  })
  // sign();
 

  logout.addEventListener("click",()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("sign out successful")
      container.style.display = "flex";
      sign_email.value = ""
      sign_password.value = ""
       card.style.display = "none"
       logout.style.display = "none"
    }).catch((error) => {
      // An error happened.
    });
  })
    
  
 