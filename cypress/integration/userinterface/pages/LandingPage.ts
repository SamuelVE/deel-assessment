/// <reference types="cypress" />
export class LandingPage {
	#nameInput = '#name';
	#emailInput = '#email';
	#phoneInput = '#phone';
	#subjectInput = '#subject';
	#messageInput = '#description';
	#submitButton = '#submitContact';

	typeName(input) {
    	cy.get(this.#nameInput).type(input);
	}

	typeEmail(input) {
    	cy.get(this.#emailInput).type(input);
	}

	typePhone(input) {
    	cy.get(this.#phoneInput).type(input);
	}

	typeSubject(input) {
    	cy.get(this.#subjectInput).type(input);
	}

	typeMessage(input) {
    	cy.get(this.#messageInput).type(input);
	}

	submit() {
    	cy.get(this.#submitButton).click();
	}
}
