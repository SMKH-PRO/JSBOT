
var firebaseConfig = {
    apiKey: "AIzaSyAruwVB7khM0PX1wVhMpapyaQL36FvfuEI",
    authDomain: "jsbot-ab7a9.firebaseapp.com",
    databaseURL: "https://jsbot-ab7a9.firebaseio.com",
    projectId: "jsbot-ab7a9",
    storageBucket: "jsbot-ab7a9.appspot.com",
    messagingSenderId: "630703391196",
    appId: "1:630703391196:web:d1e77d947b1b6f00680f19",
    measurementId: "G-9YD5RPB436"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.database().ref(`DATA`).on('value',(d)=>{//Getting online data/questions that are added by anyone!
    let data = d.val()
    try{
       let parsedData= JSON.parse(data)//Checking if data is parseable! 
       if(data && parsedData){
      localStorage.setItem('QDATA',data)//saving updated firebase data on localstorage! so users can access it offline
       }
     
    }
    catch(e){
        console.error(e)
    }
})