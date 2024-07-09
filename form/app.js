
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getStorage,
    ref
    
   } from "https://www.gstatic.com/firebasejs/10.12.3/storage.js";
  
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
  const firebaseApp = getApp(app);

const userInput = document.getElementById("userInput")


userInput.addEventListener("change",check)

function check(){
    console.log("ddd")
}