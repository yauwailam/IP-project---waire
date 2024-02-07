document.getElementById("sgnup").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("tryagn").style.display = "none";
  let userName = document.getElementById("user").value;
  let passWord = document.getElementById("password").value;
  let passWordConfirm = document.getElementById("passwordconfirmation").value;

  if (passWord === passWordConfirm) {
    var jsondata = { username: userName, password: passWord };
    console.log(jsondata);
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://login-46a7.restdb.io/rest/contact",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-apikey": "65af4da8b89917e554f38c77",
        "cache-control": "no-cache",
      },
      processData: false,
      data: JSON.stringify(jsondata),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    location.href="./index.html"
    });
  } else {
    document.getElementById("tryagn").style.display = "block";
  }
});


