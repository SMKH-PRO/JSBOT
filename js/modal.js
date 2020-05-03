const $ = (target) => document.querySelector(target)

const modalCont = $("#modal-container")
const bodyEL = $('body')
const modalBox = $("#mymodalbox")

const Question = $('#Question')
const Answer = $('#Answer')
const ErrorP = $(`#QError`)

const OpenModal = () => {
  modalCont.removeAttribute('class')

  modalCont.classList.add("seven");
  bodyEL.classList.add('modal-active');

}

const CloseModal = () => {
  modalCont.removeAttribute('class');
  bodyEL.classList.remove('modal-active');
}








function autoClose(e) {  //Handle Auto Closing
  // console.log(e)

  const clickInsideModal = e.path.includes(modalBox)

  if (!clickInsideModal) {
    CloseModal()
  }
}

const AddAutoCloser = () => {//autoClose if click outside 
  modalCont.addEventListener('click', autoClose);
}
AddAutoCloser()




const generateArrayFromString = string => {
  var cleanedString = string ? string.replace(/\;+\;/gi, ';').replace(/\s\s+/g, ' ') : ''; //remove extra spaces and extra semicolons

  //console.log('cleaned=>  ',cleanedString)
  return cleanedString.split(';').filter(hasData => hasData).map(d => d.trim())
}

const submitQuestion = (e) => {
  if (e.preventDefault) e.preventDefault();
  // alert("WOW")

  let Questions = generateArrayFromString(Question.value) //Split by semicolon
  let Answers = generateArrayFromString(Answer.value)
  let filteredQuests = Questions.map((q, i) => q.length < 10 ? { q, i } : null).filter((eachq, i) => eachq && eachq.q) //Filtered Questions with less than 10 Characters.
  let filteredAns = Questions.map((a, i) => a.length < 5 ? { a, i } : null).filter((eacha, i) => eacha && eacha.a)
  let QCharsAreMoreThan10 = filteredQuests.length < 1
  let ACharsAreMoreThan10 = filteredQuests.length < 1
  //console.log('Q=>', Questions, "\nA=>", Answers, '\nFilteredQ=>', filteredQuests, '\nFilteredA=>', filteredAns)
  if (Questions.length < 1) {
    ErrorP.style.color = "red"
    ErrorP.style.display = "block"
    ErrorP.innerHTML = "Please write atleast 1 question."

  }
  else if (Answers.length < 1) {
    ErrorP.style.color = "red"
    ErrorP.style.display = "block"
    ErrorP.innerHTML = "Please write atleast 1 answer"
  }
  else if (!QCharsAreMoreThan10) {
    ErrorP.style.color = "red"
    ErrorP.style.display = "block"
    ErrorP.innerHTML = `Error in Question#${filteredQuests[0].i + 1}, Minimum 10 Characters Required.`
  }
  else if (!ACharsAreMoreThan10) {
    ErrorP.style.color = "red"
    ErrorP.style.display = "block"
    ErrorP.innerHTML = `Error in Answer#${filteredAns[0].i + 1}, Minimum 10 Characters Required.`
  }
  else {

    ErrorP.style.color = "cornflowerblue"
    ErrorP.style.display = "block"
    ErrorP.innerHTML = "Please wait, Working on it...."
    const ExistingQuestions = QuestionsExist(Questions).filter(d => d && d.q) //Check if any question exist already

    if (ExistingQuestions.length > 0) {
      ErrorP.style.color = "red"
      ErrorP.style.display = "block"
      ErrorP.innerHTML = `Question#${ExistingQuestions[0].i + 1} is already a existing question.`
    } else {//Finally No errors if reached else!


      AddQuestion(Questions,Answers)


    }

  }
}

const QuestionsExist = (Quests) => {
  let FoundMatch =false
  for (var i = 0; i < Quests.length; i++) {
    if (QuestionExist(Quests[i])) {
      FoundMatch=true
      return [{ q: Quests[i], i }]
      break;
    }
  }

  if(!FoundMatch){
    return []
  }
}
const QuestionExist = (Quest) => {
  var QDATA = Q_DATA
  var OnlineData = []; //Data we will get from firebase!
  try {
    let parsed = JSON.parse(localStorage.getItem('QDATA'))
    OnlineData= Array.isArray(parsed) &&parsed?parsed:[]
  } catch (e) {
    console.error(e)
  }
  QDATA = [...Q_DATA, ...OnlineData]

  if (QDATA && Array.isArray(QDATA) && QDATA.length > 0) {
    var hasMatchingQuestion = false
    for (var i = 0; i < QDATA.length; i++) {
      var hasQuestion = QDATA[i].Questions
      var questionMatched = hasQuestion ? QDATA[i].Questions.filter((question, i) => RegExp(question, "gi").test(Quest)) : []
      var matchedQuestion = questionMatched.filter(data => data)

      if (matchedQuestion.length > 0) {
        hasMatchingQuestion = true
      }

    }

    return hasMatchingQuestion
  }
  else {
    return false
  }
}



const AddQuestion = (Q, A) => {
  if (Q && A) {
     const formatedNewQuest = [{Questions:Q,Answers:A}]
     AddQuestionToLocalStorage(formatedNewQuest)
     const ref = firebase.database().ref('DATA')
     ref.once('value').then(dataa=>{
       let data= dataa.val()
       if(data){
         try{
          let parsedData = JSON.parse(data)
          const QAdded = [...parsedData,...formatedNewQuest]
          ref.set(JSON.stringify(QAdded)).then(()=>{

            ErrorP.style.color = "green"
            ErrorP.style.display = "block"
            ErrorP.innerHTML = "DONE, Thank You, Added Globally <3, Closing This Dialog in 5 sec "
            setTimeout(()=>{
              CloseModal()
              },4000)
          })
            

         }catch(e){console.error(e)}
       }else{
        ref.set(JSON.stringify(formatedNewQuest)).then(()=>{

          ErrorP.style.color = "green"
          ErrorP.style.display = "block"
          ErrorP.innerHTML = "DONE, Thank You, Added Globally <3, Closing This Dialog in 5 sec"

          setTimeout(()=>{
             CloseModal()
             },4000)
        })
       }
     })
  }
  else {
    alert('An Error occurred while adding question')
  }
}


const AddQuestionToLocalStorage=(formatedQuest)=>{
  try {
   let parsed = JSON.parse(localStorage.getItem('QDATA'))
   let previousData = Array.isArray(parsed) &&parsed?parsed:[]

   let withNewQuest=[...previousData,...formatedQuest]
   localStorage.setItem('QDATA',JSON.stringify(withNewQuest))
   ErrorP.style.color = "green"
   ErrorP.style.display = "block"
   ErrorP.innerHTML = "DONE, Thank You, Added Locally <3 "
  } catch (e) {
    console.error(e)
  }
 
}



const ChangeOfQuest = (value, id) => {
  let arr = generateArrayFromString(value)
  let Caption = $(`${id}`)
  //console.log(value, id)
  let isQuest = id == '#capQuest'
  //console.log('GeneratedAray => ',arr,value)

  let isAray = arr && Array.isArray(arr)
  if (isAray && arr.length > 0 && arr.length <= 5) {
    Caption.style.display = 'block'
    Caption.style.color = "darkseagreen"
    Caption.innerText = `// ${arr.length} ${isQuest ? 'Questions' : 'Answers'} `
  } else {
    if (isAray && arr.length > 5) {
      Caption.style.display = 'block'
      Caption.style.color = "red"
      Caption.innerText = `Max 5 ${isQuest ? 'Questions' : 'Answers'} are allowed. `
    }
    else {
      Caption.style.display = 'none'
    }
  }

}