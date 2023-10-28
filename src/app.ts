interface IrregularVerbs {
	translation: string;
	firstForm: string;
	secondForm: string;
	thirdForm: string;
}

let irregularVerbs: IrregularVerbs[] = [
	{
		translation: 'być',
		firstForm: 'be',
		secondForm: 'was/were',
		thirdForm: 'been',
	},
	{
		translation: 'uderzać,bić',
		firstForm: 'beat',
		secondForm: 'beat',
		thirdForm: 'beaten',
	},
	{
		translation: 'stawać się',
		firstForm: 'become',
		secondForm: 'became',
		thirdForm: 'become',
	},
	{
		translation: 'zaczynać',
		firstForm: 'begin',
		secondForm: 'began',
		thirdForm: 'begun',
	},
	{
		translation: 'gryżć',
		firstForm: 'bite',
		secondForm: 'bit',
		thirdForm: 'bitten',
	},
	{
		translation: 'wiać',
		firstForm: 'blow',
		secondForm: 'blew',
		thirdForm: 'blown',
	},
	{
		translation: 'łamać(się),tłuc(się)',
		firstForm: 'break',
		secondForm: 'broke',
		thirdForm: 'broken',
	},
	{
		translation: 'przynosić,przyprowadzać',
		firstForm: 'bring',
		secondForm: 'brought',
		thirdForm: 'brought',
	},
	{
		translation: 'budować',
		firstForm: 'build',
		secondForm: 'built',
		thirdForm: 'built',
	},
	{
		translation: 'palić,przypalać,parzyć',
		firstForm: 'burn',
		secondForm: 'burnt',
		thirdForm: 'burnt',
	},
	{
		translation: 'kupować',
		firstForm: 'buy',
		secondForm: 'bought',
		thirdForm: 'bought',
	},
	{
		translation: 'łapać,chwytać',
		firstForm: 'catch',
		secondForm: 'caught',
		thirdForm: 'caught',
	},
	{
		translation: 'wybierać',
		firstForm: 'choose',
		secondForm: 'chose',
		thirdForm: 'chosen',
	},
	{
		translation: 'przychodzić',
		firstForm: 'come',
		secondForm: 'came',
		thirdForm: 'come',
	},
	{
		translation: 'kosztować',
		firstForm: 'cost',
		secondForm: 'cost',
		thirdForm: 'cost',
	},
	{
		translation: 'ciąć,kroić',
		firstForm: 'cut',
		secondForm: 'cut',
		thirdForm: 'cut',
	},
	{
		translation: 'kopać',
		firstForm: 'dig',
		secondForm: 'dug',
		thirdForm: 'dug',
	},
	{
		translation: 'robić,czynić',
		firstForm: 'do',
		secondForm: 'did',
		thirdForm: 'done',
	},
	{
		translation: 'rysować,ciągnąć',
		firstForm: 'draw',
		secondForm: 'drew',
		thirdForm: 'drawn',
	},
	{
		translation: 'marzyć,śnić',
		firstForm: 'dream',
		secondForm: 'dreamt',
		thirdForm: 'dreamt',
	},
	{
		translation: 'pić',
		firstForm: 'drink',
		secondForm: 'drank',
		thirdForm: 'drunk',
	},
	{
		translation: 'jeździć,prowadzić',
		firstForm: 'drive',
		secondForm: 'drove',
		thirdForm: 'driven',
	},
	{
		translation: 'jeść',
		firstForm: 'eat',
		secondForm: 'ate',
		thirdForm: 'eaten',
	},
	{
		translation: 'spadać,upadać',
		firstForm: 'fall',
		secondForm: 'fell',
		thirdForm: 'fallen',
	},
	{
		translation: 'czuć',
		firstForm: 'fell',
		secondForm: 'felt',
		thirdForm: 'felt',
	},
	{
		translation: 'walczyć',
		firstForm: 'fight',
		secondForm: 'fought',
		thirdForm: 'fought',
	},
	{
		translation: 'znajdować',
		firstForm: 'find',
		secondForm: 'found',
		thirdForm: 'found',
	},
	{
		translation: 'latać',
		firstForm: 'fly',
		secondForm: 'flew',
		thirdForm: 'flown',
	},
];

let currentLearningVerbs: IrregularVerbs[] = [];

let firstStage: IrregularVerbs[] = [];
let secondStage: IrregularVerbs[] = [];
let thirdStage: IrregularVerbs[] = [];
let fourthStage: IrregularVerbs[] = [];

const translationInput: HTMLInputElement =
	document.querySelector('#translation');

const firstFormInput: HTMLInputElement = document.querySelector('#first-form');
const secondFormInput: HTMLInputElement =
	document.querySelector('#second-form');
const thirdFormInput: HTMLInputElement = document.querySelector('#third-form');

const nextBtn: HTMLButtonElement = document.querySelector('.next-btn');
const checkBtn: HTMLButtonElement = document.querySelector('.check-btn');

nextBtn.addEventListener('click', () => {
	getVerb();
});

checkBtn.addEventListener('click', () => {
	checkVerb();
});

const getTenVerbs = () => {
	currentLearningVerbs = irregularVerbs.slice(0, 10);
	irregularVerbs.slice(10);
};

let currentVerb: IrregularVerbs;

const getVerb = () => {
	const randomNumber: number = Math.floor(
		Math.random() * currentLearningVerbs.length
	);
	const randomPostion: number = Math.floor(Math.random() * 4);

	currentVerb = currentLearningVerbs[randomNumber];

	clearInputs();
	switch (randomPostion) {
		case 0:
			translationInput.value = currentVerb.translation;
			break;
		case 1:
			firstFormInput.value = currentVerb.firstForm;
			break;
		case 2:
			secondFormInput.value = currentVerb.secondForm;
			break;
		case 3:
			thirdFormInput.value = currentVerb.thirdForm;
			break;
	}
};

const clearInputs = () => {
	translationInput.value = null;
	firstFormInput.value = null;
	secondFormInput.value = null;
	thirdFormInput.value = null;
};

const checkVerb = () => {
	if (
		currentVerb.translation === translationInput.value &&
		currentVerb.firstForm === firstFormInput.value &&
		currentVerb.secondForm === secondFormInput.value &&
		currentVerb.thirdForm === thirdFormInput.value
	) {
		firstStage.push(currentVerb);
		console.log('gut gut');
		console.log(firstStage);
	} else {
		console.log('zjebałeś');
	}
};

const startGame = () => {
	getTenVerbs();

	if (currentLearningVerbs.length > 0) {
		getVerb();
	}
};

startGame();
