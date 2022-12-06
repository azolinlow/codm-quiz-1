let currentQuestion = 0;
let score = 0;
let numHints = 0;
let numFifty = 0;
let questions = [
   {
	"question": "What SMG is this?",
	"a": "RUS",
	"b": "CBR4",
	"c": "Switchblade X9",
	"d": "HG40",
	"image":"quizimages/switchbladeX9.jpg",
	"answer": "c",
	"hint": "Shouldn't that be a knife?"
   },
   {
	"question": "What is the name of this battle royale map?",
	"a": "Isolated",
	"b": "Blackout",
	"c": "Verdansk",
	"d": "Kings Canyon",
	"image":"quizimages/blackout.jpg",
	"answer": "b",
	"hint": "Funnily enough, this map is quite bright."
   },
   {
	"question": "In what season of 2022 was classic zombies brought back?",
	"a": "Season 2",
	"b": "Season 8",
	"c": "Season 5",
	"d": "Season 9",
	"image":"quizimages/shinonuma.jpg",
	"answer": "d",
	"hint": "What month is September?"
   },
   {
	"question": "What team won the CODM World Champs in 2021?",
	"a": "Tribe Gaming",
	"b": "NYSLM",
	"c": "Zygnus",
	"d": "TMGG",
	"image":"quizimages/codmworlds2021.jpg",
	"answer": "a",
	"hint": "If we are a clan, we can also be called a:______"
   },
   {
	"question": "How many kills are needed for a nuke in multiplayer?",
	"a": "15",
	"b": "25",
	"c": "30",
	"d": "20",
	"image":"quizimages/nuke.jpg",
	"answer": "d",
	"hint": "5 + 5 - 3 + 10 - 5 + 8 = "
   },
   {
	"question": "What sniper is this?",
	"a": "XPR",
	"b": "ZRG",
	"c": "DLQ33",
	"d": "NA45",
	"image":"quizimages/DLQ33.jpg",
	"answer": "c",
	"hint": "It has numbers in its name, but its not North American"
   },
   {
	"question": "How much does it cost to fully level up a mythic weapon (USD)?",
	"a": "$100",
	"b": "$300",
	"c": "$150",
	"d": "$50",
	"image":"quizimages/kilo141mythic.jpg",
	"answer": "b",
	"hint": "Fully leveled mythic weapons cost more than the newest Apple Watch SE"
   },
   {
	"question": "What year was Call of Duty: Mobile released?",
	"a": "2016",
	"b": "2019",
	"c": "2017",
	"d": "2021",
	"image":"quizimages/codm.jpg",
	"answer": "b",
	"hint": "CODM was released 16 years after the first COD game"
   },
   {
	"question": "What is the highest rank in Multiplayer?",
	"a": "Grandmaster",
	"b": "Predator",
	"c": "Elite",
	"d": "Legendary",
	"image":"quizimages/leggy.jpg",
	"answer": "d",
	"hint": "If you are going to be remembered forever you are a:______"
   },
   {
	"question": "What Assault Rifle is this?",
	"a": "M13",
	"b": "M4",
	"c": "BK57",
	"d": "Oden",
	"image":"quizimages/m13.jpg",
	"answer": "a",
	"hint": "Think about the age of a teenager..."
   }
 ];

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js');
}//if
 
 function loadQuestion() {
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }//if
    
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";

    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct! Your score is: " + score + " / " + questions.length;

	   document.getElementById("info").innerHTML = "Click on the answer you think is correct. Good Luck!";
    }//if
    else {
       message = "Incorrect. The correct answer is '" + questions[currentQuestion].answer + "'. Your score is: " + score + " / " + questions.length;

	   document.getElementById("info").innerHTML = "Click on the answer you think is correct. Good Luck!";
    } // else
        
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        if(score >= 7){
			message = "Wow! You're good at this! Your final score is: " + score + " / " + questions.length;
		}//if
		else if(score >= 5){
			message = "Not the best, but not the worst either. Your final score is: " + score + " / " + questions.length;
		}//else if
		else if(score <= 4){
			message = "You did very badly. If taking quizzes is your hobby, it's time to get a new one. Your final score is: " + score + " / " + questions.length;
		}//else if
    }//if
    else {
       loadQuestion();
    }//else
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
 }//markIt
 
function closeLightBox() {
   document.getElementById("lightbox").style.display = "none";
}//closeLightbox

function giveHint(){
	if(numHints < 1){
		numHints++;
		document.getElementById("info").innerHTML = questions[currentQuestion].hint;
	}//if
	else{
		document.getElementById("info").innerHTML = "You have run out of hints :(";
	}//else
}//giveHint