const firebaseConfig = {
    apiKey: "AIzaSyBU5Pw9Gf1IvdhbrmyBg3LZ9X88ljoDH1U",
    authDomain: "project-kwitter-cddf1.firebaseapp.com",
    projectId: "project-kwitter-cddf1",
    storageBucket: "project-kwitter-cddf1.appspot.com",
    messagingSenderId: "811577753909",
    appId: "1:811577753909:web:af8de6f4785e2a39ec4c7c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
  localStorage.removeItem("user_name");
  window.location = "index.html";
}
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose: "add room name" });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = '<div class="room_name" id=' + Room_names + ' onclick="redirectToRoomName(this.id)">#' + Room_names + '</div> <hr>';
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName() {
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
