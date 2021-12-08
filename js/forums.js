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



var id = [];
var postcomment=[];
firebase
  .firestore()
  .collection('postCollection')
  .onSnapshot((querySnapshot) => {
    //console.log(querySnapshot.size);

    var i = 1;
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data().postBody);
      console.log(doc.data().commentlist);
    
      id[i - 1] = doc.id;
      postcomment.push(doc.data().commentlist);
  //    console.log(id);

      var postInformation =
        '<div class= "postTitle">' +'<h1>' +doc.data().postTitle +'</h1>'+ '</div>';
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
      document.getElementById("comment-form"+i+"").style.visibility = "visible";
      document.getElementById("main-comment"+i+"").style.visibility = "visible";
      document.getElementById("message"+i+"").style.visibility = "visible";
 
      console.log("comment"+i+"");
      var final = document.getElementById('message' + i + '');
      final.innerHTML = postInformation;
      var commentInformation ="";
      for(var j = 0; j < doc.data().commentlist.length; j++){
        commentInformation+=  '<div class="comment-post">' +doc.data().commentlist[j] + '</div>'
      }
      final = document.getElementById('main-comment' + i + '');
      final.innerHTML = commentInformation;
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

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

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
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[1];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);
  
});
$(".comment-form3 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form3').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[2];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form4 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form4').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[3];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form5 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form5').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[4];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form6 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form6').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[5];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form7 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form7').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[6];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form8 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form8').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[7];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form9 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form9').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[8];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form10 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form10').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[9];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form11 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form11').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[10];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form12 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form12').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[11];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form13 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form13').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[12];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form14 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form14').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[13];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form15 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form15').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[14];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form16 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form16').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[15];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form17 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form17').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[16];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form18 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form18').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[17];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form19 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form19').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[18];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form20 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form20').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[19];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
$(".comment-form21 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.comment-form21').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  
  var thevalue = inputJson["commentdata"];

  postcomment[0].push(thevalue);
  var inputJson={commentlist:postcomment[0]};

  console.log(inputJson);
  var doc = id[20];
  firebase.firestore().collection('postCollection').doc(doc).update(inputJson);

});
