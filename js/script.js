function createaccount() {
  let email = document.querySelector("#signupemail").value;
  let password = document.querySelector("#signuppassword").value;
  let confirmpassword = document.querySelector("#signupconfirmpassword").value;

  if (password == confirmpassword) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        showprofile(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    alert("Password not match!");
  }
}

function loginaccount() {
  let email = document.querySelector("#loginemail").value;
  let password = document.querySelector("#loginpassword").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      showprofile(user);
    })
    .catch((error) => {
      alert(error.message);
    });
}

function logout() {
  auth.signOut().then(
    function () {
      alert("Logged out!");
      homediv.style.display = "flex";

      registerdiv.style.display = "none";
      logindiv.style.display = "none";
      profilediv.style.display = "none";
    },
    function (error) {
      alert(error.message);
    }
  );
}

const logindiv = document.querySelector(".login"),
  registerdiv = document.querySelector(".register"),
  homediv = document.querySelector(".home"),
  profilediv = document.querySelector(".profile");

function showsignup() {
  registerdiv.style.display = "flex";
  logindiv.style.display = "none";
  homediv.style.display = "none";
  profilediv.style.display = "none";
}

function showlogin() {
  logindiv.style.display = "flex";
  registerdiv.style.display = "none";
  homediv.style.display = "none";
  profilediv.style.display = "none";
}

function showprofile(user) {
  console.log(user);

  profilediv.style.display = "flex";
  registerdiv.style.display = "none";
  homediv.style.display = "none";
  logindiv.style.display = "none";

  let useremail = document.querySelector(".profile #user");
  useremail.innerText = user.email;

  let userverified = document.querySelector(".profile #userverified");
  userverified.innerText = user.emailVerified;

  let useruid = document.querySelector(".profile #useruid");
  useruid.innerText = user.uid;

}
