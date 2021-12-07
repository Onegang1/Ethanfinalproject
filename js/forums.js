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
  inputJson["num"]=0;
  inputJson["commentlist"]=["a","b"];
  firebase.firestore().collection('postCollection').add(inputJson);
});
// update the result in table

firebase
  .firestore()
  .collection('postCollection')
  .doc('4qaYfThNTGm1gBXPW63Z')
  .update({ Comment: 'test' });

var id = [];
firebase
  .firestore()
  .collection('postCollection')
  .onSnapshot((querySnapshot) => {
    //console.log(querySnapshot.size);

    var i = 1;
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      //console.log(doc.data().postBody);
      //console.log(doc.data().postTitle);
      for(int i = 0; i < doc.data().num; i++){
        console.log(doc.data().comment)
      }
      id[i - 1] = doc.id;
      console.log(id);

      var postInformation =
        '<div class= "postTitle">' + doc.data().postTitle + '</div>';
      postInformation +=
        '<div class= "postBody">' + doc.data().postBody + '</div>';
      // postInformation += '<div class= "comment' + i + '">';
      // postInformation += '<form class ="comment-form' + i + '">';
      // postInformation +=
      //   '<input type="radio" name="choice" value="' +
      //   i +
      //   '">' +
      //   'Add a comment check if yes' +
      //   '<input type="text" id="comment' +
      //   i +
      //   '"name="commentdata" placeholder="Comment" />' +
      //   '<p><input type="button" id="commentbutton' +
      //   i +
      //   '" value="Add comment" /></p>';
      //postInformation += '</div>';
      //postInformation += '</form>';
      var final = document.getElementById('message' + i + '');
      final.innerHTML = postInformation;
      i++;
    });
  });

$(".comment-form1 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form1').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  var thevalue = inputJson["commentdata"];
  var inputJson={comment2:thevalue };

  console.log(inputJson);
  var doc = id[0];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);
});
$(".comment-form2 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form2').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  console.log(inputJson);
  firebase.firestore().collection('comments').add(inputJson);
});
$(".comment-form3 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form3').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  console.log(inputJson);
  firebase.firestore().collection('comments').add(inputJson);
});
