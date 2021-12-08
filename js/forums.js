
   
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
var num = 0;
$(".postcontent input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.postcontent').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  inputJson["number"]= num;
  inputJson["commentlist"]=[];
  num = 0;
  firebase.firestore().collection('postCollection').add(inputJson);
});
// update the result in table



var id = [];
var postcomment = [];
firebase
  .firestore()
  .collection('postCollection')
  .onSnapshot((querySnapshot) => {
    

    var i = 1;
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      // console.log(doc.data().postBody);
      // console.log(doc.data().commentlist);
    
      id[i - 1] = doc.id;
    //console.log(postcomment);
     console.log(num);
    if(postcomment[doc.data().number] == null){
    postcomment[doc.data().number]=(doc.data().commentlist);
    console.log(postcomment);
    }
    // console.log(postcomment);
      
      
 

      var postInformation =
        '<div class= "postTitle">' +'<h1>' +doc.data().postTitle +'</h1>'+ '</div>';
      postInformation +=
        '<div class= "postBody">' + doc.data().postBody + '</div>';
      
      
      document.getElementById("comment-form"+i+"").style.visibility = "visible";
      document.getElementById("main-comment"+i+"").style.visibility = "visible";
      document.getElementById("message"+i+"").style.visibility = "visible";
 
      
      var final = document.getElementById('message' + i + '');
      final.innerHTML = postInformation;
      var commentInformation ="";
      for(var j = 0; j < doc.data().commentlist.length; j++){
        commentInformation+=  '<div class="comment-post">' +doc.data().commentlist[j] + '</div>'
      }
      final = document.getElementById('main-comment' + i + '');
      final.innerHTML = commentInformation;
      i++;
      num += 1;
    });
  });
  
$(".comment-form1 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var doc1 = id[0];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    var inputdata = [];
    inputdata = $('.comment-form1').serializeArray();
    
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    //console.log(inputJson);
    console.log(temp);
    temp = (doc.data().number);
    console.log(temp);
   // console.log(temp);
   var thevalue = inputJson["commentdata"];
   //console.log(thevalue);
    //console.log(postcomment);
    console.log(postcomment[temp]);
    postcomment[temp].push(thevalue);
    console.log(postcomment[temp]);
    //console.log(postcomment);
    var inputJson={commentlist:postcomment[temp]};
    
    console.log(inputJson);
  
  
    firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
  });
  
  
  
  num = 0;
  
});
$(".comment-form2 input[type='button']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var doc1 = id[1];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    var inputdata = [];
    inputdata = $('.comment-form2').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
        });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    console.log(thevalue);
    postcomment[temp].push(thevalue);
    console.log(postcomment);
    var inputJson={commentlist:postcomment[temp]};
   console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
num = 0;
});
  
  

$(".comment-form3 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[2];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    var inputdata = [];
     inputdata = $('.comment-form3').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
num = 0;
});



$(".comment-form4 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[3];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    var inputdata = [];
     inputdata = $('.comment-form4').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
num = 0;
});
  


$(".comment-form5 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[4];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form5').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
 
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
  }); 
  num = 0;
});


$(".comment-form6 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[5];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form6').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
num = 0;
});
$(".comment-form7 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[6];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form7').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form8 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[7];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form8').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form9 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[8];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form9').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form10 input[type='button']").click(function (e) {
  e.preventDefault();
  var doc1 = id[9];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form10').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form11 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[10];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form11').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form12 input[type='button']").click(function (e) {
  e.preventDefault();
  var doc1 = id[11];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form12').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form13 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[12];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form13').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form14 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[13];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form14').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form15 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[14];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form15').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form16 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[15];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form16').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form17 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[16];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form17').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form18 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[17];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form18').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form19 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[18];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form19').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form20 input[type='button']").click(function (e) {
  e.preventDefault();

  var doc1 = id[19];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form20').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
$(".comment-form21 input[type='button']").click(function (e) {
  e.preventDefault();
  var doc1 = id[20];
  var docref = firebase.firestore().collection('postCollection').doc(doc1);
  var temp = 0;
  docref.get().then((doc) => {
   
    
    var inputdata = $('.comment-form21').serializeArray();
    console.log(inputdata);
    var inputJson = {};
    inputdata.forEach((data) => {
      inputJson[data.name] = data.value;
    });
    temp = (doc.data().number);
    console.log(temp);
   var thevalue = inputJson["commentdata"];
    
  postcomment[temp].push(thevalue);
  var inputJson={commentlist:postcomment[temp]};
  console.log(inputJson);
  
  
  firebase.firestore().collection('postCollection').doc(doc1).update(inputJson);
});
});
