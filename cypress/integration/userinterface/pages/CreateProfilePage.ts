export class CreateProfilePage {
	#firstNameInput = 'input[name=firstName]';
	#lastNameInput = 'input[name=lastName]';
	#emailInput = 'input[name=email]';
	#passwordInput = 'input[name=new-password]';

	typeFirstName(input: string): CreateProfilePage {
		cy.get(this.#firstNameInput).type(input);
		return this;
	}

	typeLastName(input: string): CreateProfilePage {
		cy.get(this.#lastNameInput).type(input);
		return this;
	}

	typeEmail(input: string): CreateProfilePage {
		cy.get(this.#emailInput).type(input);
		return this;
	}

	typePassword(input: string): CreateProfilePage {
		cy.get(this.#passwordInput).type(input);
		return this;
	}

	validateSubmitButtonIsEnabled(): CreateProfilePage {
		cy.get('button.MuiButton-containedPrimary').should('be.enabled');
		return this;
	}
}
