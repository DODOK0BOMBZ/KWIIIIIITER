
//ADICIONE SEUS LINKS DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyA65d3Ag2welxBs12E1oaLyWuR9awKkT2s",
  authDomain: "madoka-6fbd7.firebaseapp.com",
  databaseURL: "https://madoka-6fbd7-default-rtdb.firebaseio.com",
  projectId: "madoka-6fbd7",
  storageBucket: "madoka-6fbd7.appspot.com",
  messagingSenderId: "802459301278",
  appId: "1:802459301278:web:1e445fd72a051d6d8a128f"
};

firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionando nome da sala"
  });

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

function getData()
{
  firebase.database().ref("/").on('value', function (snapshot)
  {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
    {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Nome da sala: " + Room_names);

      row = "<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+
      Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
  }
  getData();

  function redirectToRoomName (name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }






