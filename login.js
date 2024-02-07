document.addEventListener("DOMContentLoaded", function (){
  const APIKEY = "65af4da8b89917e554f38c77";
  const loginEnd =  "https://login-46a7.restdb.io/rest/contact";
  
  document.getElementById("sub").addEventListener("click", function (q) {
    q.preventDefault();

    let userName = document.getElementById("USER").value;
    let passWord = document.getElementById("PASSWORD").value;

    if (!userName || !passWord) {
      alert("Required field");
      return;
    }

    fetch(`${loginEnd}?q={"username":"${userName}"}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },

    })
      .then((response) => response.json())
      .then((data)=> {
        if (data.length > 0 && data[0].password === passWord) {
          console.log("Welcome back!");

          location.href="./home.html"
        }
        else {
          document.getElementById("nonuser").style.display = "block";
        }
      })
  })
});

