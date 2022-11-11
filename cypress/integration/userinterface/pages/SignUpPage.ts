export class SignUpPage {
	#businessTab = 'button[value=client]';
	#contractorTab = 'button[value=contractor]';
	#nextButton = 'div.sign-up-account-type-box ~ button';

	clickBusinessTab(): SignUpPage {
		cy.get(this.#businessTab).click();
		return this;
	}

	clickContractorTab(): SignUpPage {
		cy.get(this.#contractorTab).click();
		return this;
	}

	clickNextButton(): SignUpPage {
		cy.get(this.#nextButton).click();
		return this;
	}
}
