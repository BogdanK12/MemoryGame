const sectionGreeting = document.querySelector('.greeting');
const sectionGameField = document.querySelector('.gamefield');
const sectionCongratulations = document.querySelector('.congratulations');
const buttonPlay = document.querySelector('.button-play');
const buttonBack = document.querySelector('.button-back');
const buttonRestart = document.querySelector('.button-restart');
const openCardImage = [
	'white url("images/image.png") no-repeat',
	'white url("images/image1.png") no-repeat',
	'white url("images/image2.png") no-repeat',
	'white url("images/image3.png") no-repeat',
	'white url("images/image4.png") no-repeat',
	'white url("images/image5.png") no-repeat',
    'white url("images/image6.png") no-repeat',
    'white url("images/image7.png") no-repeat',
    'white url("images/image8.png") no-repeat',
	'white url("images/image9.png") no-repeat',
	'white url("images/image10.png") no-repeat',
	'white url("images/image11.png") no-repeat',
	'white url("images/image12.png") no-repeat',
];     
const cards = document.querySelector('.cards');  
let firstOpen;
let secondOpen;         
let openCardsName;
//const card1 = document.querySelector('#2');                       
//const card1 = document.querySelector('#3');
//const card1 = document.querySelector('#4');
//const card1 = document.querySelector('#5');
//const card1 = document.querySelector('#6');
//const card1 = document.querySelector('#7');
//const card1 = document.querySelector('#8');
//const card1 = document.querySelector('#9');
//const card1 = document.querySelector('#10');
//const card1 = document.querySelector('#11');
//const card1 = document.querySelector('#12');

buttonPlay.addEventListener('click', function () {
	sectionGreeting.style.display = 'none';
	sectionGameField.style.display = 'block';
	
});
buttonBack.addEventListener('click', function () {
	sectionGreeting.style.display = 'block';
	sectionGameField.style.display = 'none';
                                                                         
});
buttonRestart.addEventListener('click', function () {                    
	sectionGreeting.style.display = 'none';                              
	sectionGameField.style.display = 'block';                       
	                                           
}); 

let compareCheckCards = function(firstOpen, secondOpen){
	if(openCardsName.length === 2 && openCardsName[0] === openCardsName[1]){
		firstOpen.classList.add('disappereans');
		secondOpen.classList.add('disappereans');
		firstOpen = 0;
		openCardsName = [];
	}
	else if(openCardsName.length === 2 && openCardsName[0] !== openCardsName[1]){
		setTimeout(function(){
		firstOpen.removeAttribute("style");
		secondOpen.removeAttribute("style");}, 1000)
	}
};
                                                
let displayCard = function(e) {             
	if (e.target.tagName !== "LI") return;                                       
	e.target.style.background = openCardImage[e.target.id];
	e.target.style.backgroundSize = 'cover';
	e.target.classList.add('rotation-effect');
	openCardsName.push(e.target.getAttribute("id")); console.log(openCardsName);
	if(! firstOpen){
	firstOpen = e.target;
	console.log(firstOpen);
	}
	else{
	secondOpen = e.target;
	console.log(secondOpen);
	};
	compareCheckCards(firstOpen, secondOpen);
};
cards.addEventListener('click', displayCard);   
                   
let start = function (){                                    
	cards.innerHTML = '';
	openCardsName = [];
	let arrayId = fillArray();
	for (let i = 0; i < 12; i++) {                                      
	const card = document.createElement('li');                                
	card.classList.add('card','shirt-color-1');                                   
	card.setAttribute('id', arrayId[i]);                                            
	cards.appendChild(card);}
		
};

buttonPlay.addEventListener('click', start);

let fillArray = function(){
	let array = [];
	for(let i = 1; i < 13; i++){
	array.push((i%6)+1);	
	}
	array.sort(function() {
		return(Math.random()-0.5);
	});
	return array;
}
console.log(fillArray());