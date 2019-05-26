class Html {
	constructor() {
		this.yearSelect = document.querySelector('#year');
		this.form = document.querySelector('#request-quote');
		this.make = document.querySelector('#make');
		this.formGroup = document.querySelector('.form-group');
		// this.levelInput = document.querySelector('input[name="level"]:checked');
	}

	displayMake() {
		const makeValue = this.make.value;
		const yearValue = this.yearSelect.value;
		const levelInputValue = document.querySelector('input[name="level"]:checked').value;

		return {
			makeValue, 
			yearValue, 
			levelInputValue
		}
	}

	displayYears() {
		const max = new Date().getFullYear();
		const min = max - 20;

		for(let i = max; i >= min; i--) {
			const option = document.createElement('option');
			option.value = i;
			option.textContent = i;
			this.yearSelect.appendChild(option);
		}
	}

	displayError(msg) {
		const div = document.createElement('div');
		div.className = 'error';
		div.innerHTML = `
				<p>${msg}</p>
		`;
			this.form.insertBefore(div, this.formGroup);
			this.removeErrorMessage();
	}

	removeErrorMessage() {
		setTimeout( () => {
			document.querySelector('.error').remove();
		}, 3000);
	}

}

export class Insurance {
	constructor(makeValue, yearValue, levelInputValue) {
		this.make = makeValue;
		this.year = yearValue;
		this.level = levelInputValue;
	}
	calculateQuotation(insurance) {
		const instance = insurance;
		console.log(instance, 'calculateQuotation')
	}

}

export const html = new Html();
