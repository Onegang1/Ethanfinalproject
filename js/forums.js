// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".postcontent input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.postcontent').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  firebase.firestore().collection('postCollection').add(inputJson);
});
// update the result in table
firebase
  .firestore()
  .collection('SurveyResults')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);

    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;
    var answer4 = 0;
    querySnapshot.forEach((doc) => {
      switch (doc.data().choice) {
        case 'A':
          answer1++;
          break;
        case 'B':
          answer2++;
          break;
        case 'C':
          answer3++;
          break;
        case 'D':
          answer4++;
          break;
      }
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comm);
    });
    $('#ans1').text(answer1);
    $('#ans2').text(answer2);
    $('#ans3').text(answer3);
    $('#ans4').text(answer4);
  });
