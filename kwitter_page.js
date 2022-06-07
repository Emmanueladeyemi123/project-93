const firebaseConfig = {
    apiKey: "AIzaSyBU5Pw9Gf1IvdhbrmyBg3LZ9X88ljoDH1U",
    authDomain: "project-kwitter-cddf1.firebaseapp.com",
    projectId: "project-kwitter-cddf1",
    storageBucket: "project-kwitter-cddf1.appspot.com",
    messagingSenderId: "811577753909",
    appId: "1:811577753909:web:af8de6f4785e2a39ec4c7c"
  };

  function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");