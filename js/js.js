var randomr;
var randomAns;
//INSULTS ENDS ABOVE
var pic = document.createElement("IMG");

var audio = new Audio('./media/sounds/ping.mp3');
var ticking = new Audio('./media/sounds/ticking.mp3');
var bye = new Audio('./media/sounds/bye.wav');
function usermessage() {

var QDATA =  Q_DATA
var OnlineData= []; //Data we will get from firebase!
try{
	let parsed= JSON.parse(localStorage.getItem('QDATA'))
	OnlineData= Array.isArray(parsed) &&parsed?parsed:[]
}catch(e){
	console.error(e)
}
QDATA=[...Q_DATA,...OnlineData]


	//variables for User Message INput
	var usrinput = document.getElementById("usrinput").value;
	if(usrinput&&usrinput.length>2){
	localStorage.setItem('lastInput',usrinput)
	}
	var div = document.createElement("div");
	var div2 = document.createElement("div");
	var br = document.createElement("br");
	var defaultimage = document.createElement("IMG");
	var t = document.createTextNode(usrinput);
	var span = document.createElement("span");
	var p = document.createElement("p");

	//Var For User Ends Above

	//Var For Reply From bot
	var iframe = document.createElement('iframe');
	var inputt = document.createElement('input');
	var ul = document.createElement('UL');
	var li = document.createElement('LI');
	var creat = document.createElement('a');
	var rimage = document.createElement("IMG");
	var rdiv = document.createElement("div");
	var childdiv = document.createElement("div");
	var rdiv2 = document.createElement("div");
	var rdefaultimage = document.createElement("IMG");
	var rspan = document.createElement("span");
	var rp = document.createElement("p");
	var usernametext = document.createElement("text");

	//making it to taget robot message style in css 
	rdiv2.id = "rdiv2";
	rdiv.id = "rdiv";
	rspan.id = "rspan";
	rp.id = "rp";
	childdiv.id = "childdiv";
	//id finished

	//robo image src
	rimage.src = "./media/icons/robot.png";
	rimage.alt = "Robot Image..!";
	rimage.id = "rimage";
	//src ends


	//Varaiables finish

	if (usrinput.length > 1 && usrinput != "" && usrinput != "  " && usrinput != "   ") {// ADD USER's MESSAGE BUBLE

		document.getElementById("usrinput").value = "";

		//img source 
		defaultimage.src = "./media/icons/defaultuser.png";
		defaultimage.alt = "DefaultPic";

		//Making ids to call these in CSS
		defaultimage.id = "roboimg";
		div.id = "robodiv";
		p.id = "robop";
		span.id = "robospan";
		div2.id = "robodiv2";
		//IDS ends above
		div.appendChild(defaultimage);

		div.appendChild(span);
		div.appendChild(div2);
		span.appendChild(p);
		p.appendChild(t);
		my_List.appendChild(div);

		my_List.appendChild(div);

		window.scrollTo(0, document.body.scrollHeight);

	}







	//Name function start!

	if (RegExp("WHAT IS MY NAME", "gi").test(usrinput) || RegExp("TELL ME MY NAME", "gi").test(usrinput)|| RegExp("WHAT's MY NAME", "gi").test(usrinput)|| RegExp("WHATS MY NAME", "gi").test(usrinput)) {//ADD ROBOTS MESSAGE BUBLE


		if (localStorage.getItem("name") == null) {
			audio.play();
			randomr = ["Oh, You never told me your name :( how would i know your name? i am not magician my friend, write your name in this textbox:", "You never told me your name, Write your name in this box: "];
			 randomAns =randomr[ RANDOM_NUM_GENERATOR(randomr.length-1) ]
			AppendElements(rdiv, childdiv, rspan, rimage, rdiv2, rp,randomAns)
			rspan.appendChild(usernametext);
			usernametext.appendChild(rp);
			usernametext.id = "nametext"
			rp.appendChild(inputt);
			inputt.placeholder = "Your Name";
			inputt.id = "username";
			inputt.setAttribute("onkeydown", "if (event.keyCode == 13) username()");
		}
		else {

			audio.play();
			randomr = ["I remember your name that you told me last time is: " + localStorage.getItem("name"), "According to my knowledge your name is: " + localStorage.getItem("name")];
			 randomAns =randomr[ RANDOM_NUM_GENERATOR(randomr.length-1) ]
			AppendElements(rdiv, childdiv, rspan, rimage, rdiv2, rp,randomAns)


		}
	} //NAME FUNCTION ENDS

	else if (usrinput.length < 2) {

		return false;
	}
	else {

		if (Array.isArray(QDATA) && QDATA.length > 0) {
			var DidNotGetAnyAnswer = true
			for (var i = 0; i < QDATA.length; i++) {
				var hasQuestionAndAnswer = QDATA[i] && QDATA[i].Questions && QDATA[i].Answers && Array.isArray(QDATA[i].Questions) && QDATA[i].Questions.length > 0 && Array.isArray(QDATA[i].Answers) && QDATA[i].Answers.length > 0

				var questionMatched  = hasQuestionAndAnswer?QDATA[i].Questions.filter((question, i) => RegExp(question, "gi").test(usrinput)):[]
                var matchedQuestion= questionMatched.filter(data=>data)
				if (hasQuestionAndAnswer && matchedQuestion && Array.isArray(matchedQuestion) && matchedQuestion.length > 0) { //Found Matching Question In DATA	 
					DidNotGetAnyAnswer = false
					var Answers = QDATA[i].Answers
					var RandomNum = RANDOM_NUM_GENERATOR(Answers.length - 1)
					 randomAns = Answers.length > 1 ? Answers[RandomNum] : Answers[0]

					 console.log('MatchedQ=> ',matchedQuestion)

					audio.play();

					AppendElements(rdiv, childdiv, rspan, rimage, rdiv2, rp,randomAns)

					if (QDATA[i].action) {
						QDATA[i].action({ rdiv, childdiv, rspan, rimage, rdiv2, rp })
					}
					break;
				} else {
					//console.log('QuestionScanned But not mathched=> ',QDATA[i])
					DidNotGetAnyAnswer = true
				}
			}

			if (DidNotGetAnyAnswer) {
				DefaultMSG(rdiv, childdiv, rspan, rimage, rdiv2, rp,usrinput)
			}
		} else {
			DefaultMSG(rdiv, childdiv, rspan, rimage, rdiv2, rp,usrinput)

		}





	}


};//FUNCTION ENDS HERE

function AppendElements(rdiv, childdiv, rspan, rimage, rdiv2, rp,text){
	audio.play();
	rdiv.appendChild(childdiv); childdiv.appendChild(rspan); childdiv.appendChild(rimage);
	childdiv.appendChild(rdiv2);
	rspan.appendChild(rp);
	rp.appendChild(document.createTextNode(text));

	my_List.appendChild(rdiv);

	window.scrollTo(0, document.body.scrollHeight);
}
function DefaultMSG(rdiv, childdiv, rspan, rimage, rdiv2, rp,usrinput=false) {
	let text = "I don't have any answer to your message/question, Maybe you can help me?"
	AppendElements(rdiv, childdiv, rspan, rimage, rdiv2, rp,text)
	let NewBTN= document.createElement('BUTTON')
	NewBTN.id="AddNewQuest"
	NewBTN.setAttribute("title","Yes, You can add question and their answer and next time anyone asks your answer will be delivered!")
	NewBTN.setAttribute("onclick","OpenModal()")
	NewBTN.appendChild(document.createTextNode("Add Question/Answer"))
	rp.appendChild(NewBTN);
if(Question && usrinput){
	//console.log('usrinput==>>',usrinput)
	Question.value = usrinput
}

}
function username() {

	var name;

	name = document.getElementById("username").value;



	if (name < 1) {
		alert("Please write your name in the box then press enter");
	}


	else {
		localStorage.setItem("name", name);

		document.getElementById("nametext").innerHTML = "<p id='rp'> Thank you for letting me know your name. " + localStorage.getItem("name") + " is a very nice name. </p>";
	}
}



document.addEventListener('DOMContentLoaded', function () {

	var input = document.getElementById("usrinput");
	input.addEventListener('keydown', function (e) {
		var input = e.target;
		var val = input.value;
		var end = input.selectionEnd;
		if (e.keyCode == 32 && (val[end - 1] == " " || val[end] == " ")) {
			e.preventDefault();
			return false;

		}

	});
});


