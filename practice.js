
var firebaseConfig = {
    apiKey: "AIzaSyBhMh6ZU2xrfHj6fvrQYksHQdz0kAkglIY",
    authDomain: "kwitter-2b2f0.firebaseapp.com",
    databaseURL: "https://kwitter-2b2f0-default-rtdb.firebaseio.com",
    projectId: "kwitter-2b2f0",
    storageBucket: "kwitter-2b2f0.appspot.com",
    messagingSenderId: "637252464873",
    appId: "1:637252464873:web:88835d328f7112641cc078"
  };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function adduser(){
        user_name=document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose:"adding user",
            sport:"table tennis",
            weekday:"monday"
        })
    }