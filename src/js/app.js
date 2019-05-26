import { html, Insurance } from './ui';


function getYears() {
	html.displayYears();
}

function onSubmit(event) {
	const { makeValue, yearValue, levelInputValue } = html.displayMake();

	if(makeValue === '' || yearValue === '' || levelInputValue === '') {
			html.displayError('Please, fill in all fields');
	} 
	else {
			const insurance = new Insurance(makeValue, yearValue, levelInputValue);
			const price = insurance.calculateQuotation(insurance);
			console.log(price)
	}
	event.preventDefault();
}

function subscribe() {
	document.addEventListener('DOMContentLoaded', getYears);
	html.form.addEventListener('submit', onSubmit);
}

export function init() {
	subscribe();
}