var firebaseConfig = {
  apiKey: 'AIzaSyC9Ji0HS-uvb6_NlS5G4lraXnFOzFwSWLo',
  authDomain: 'ethanfinalproject.firebaseapp.com',
  projectId: 'ethanfinalproject',
  storageBucket: 'ethanfinalproject.appspot.com',
  messagingSenderId: '415937394300',
  appId: '1:415937394300:web:a3f751c1be0fd67a1c3bf9',
  measurementId: 'G-NMEZCLHRKQ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#loginpage').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $("#loginpage input[name='login']").val();
  var password = $("#loginpage input[name='pwd']").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      window.location.href = 'forums.html';
      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(+email + emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
$('#newacc').click(function (e) {
  window.location.href = 'Signup.html';
  console.log('hi');
});
