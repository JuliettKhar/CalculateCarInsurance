class Html {
	constructor() {
		this.yearSelect = document.querySelector('#year');
		this.form = document.querySelector('#request-quote');
		this.make = document.querySelector('#make');
		this.formGroup = document.querySelector('.form-group');
		this.result = document.querySelector('#result');
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

	showResults(price) {
			this.result.innerHTML = `
			<p class="total">Total: $ ${price}<p/>
			`
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
		let price;
		const base = 2000;
		const make = instance.make;
		/*
          1 = American 15%
          2 = Asian 05%
          3 = European 35%
   */
     switch(make) {
     	case '1': 
     				price = base * 1.15;
     				break;
     	case '2': 
     				price = base * 1.05;
     				break;
     	case '3': 
     				price = base * 1.35;
     				break;

     }

   const year = instance.year;
   const difference = this.getYearDifference(year);
   price = price - ((difference * 3) * price) / 100;
   const level = instance.level;
   price = this.calculateLevel(price, level);
   return price;
	}

	getYearDifference(year) {
		return new Date().getFullYear() - year;
	}

	calculateLevel(price, level) {
			   /*
          Basic insurance is going to increase the value by 30%
          Complete Insurance is going to increaste the value by 50%
     */
     if(level === 'basic') {
     	price = price * 1.30;
     }
     else {
     	price = price * 1.50;
     }
     return price;
	}

}

export const html = new Html();
