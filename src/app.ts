const irregularVerbs = [
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
];

const translationInput: HTMLInputElement =
	document.querySelector('#translation');

const firstFormInput: HTMLInputElement = document.querySelector('#first-form');
const secondFormInput: HTMLInputElement =
	document.querySelector('#second-form');
const thirdFormInput: HTMLInputElement = document.querySelector('#third-form');

const nextBtn: HTMLButtonElement = document.querySelector('.next-btn');
const checkBtn: HTMLButtonElement = document.querySelector('.check-btn');

checkBtn.addEventListener('click', () => {
	console.log(translationInput.value);
	console.log(firstFormInput.value);
	console.log(secondFormInput.value);
	console.log(thirdFormInput.value);
});
