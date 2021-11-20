var firebaseConfig = {
  apiKey: "AIzaSyC9Ji0HS-uvb6_NlS5G4lraXnFOzFwSWLo",
  authDomain: "ethanfinalproject.firebaseapp.com",
  projectId: "ethanfinalproject",
  storageBucket: "ethanfinalproject.appspot.com",
  messagingSenderId: "415937394300",
  appId: "1:415937394300:web:a3f751c1be0fd67a1c3bf9",
  measurementId: "G-NMEZCLHRKQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $("#signin-form input[name='username']").val();
  var password = $("#signin-form input[name='password']").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
