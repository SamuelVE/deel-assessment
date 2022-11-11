export class LoginPage {
	#signUpLink = '.login-signup-link';

	goToSignUpPage(): LoginPage {
		cy.get(this.#signUpLink).click();
		return this;
	}
}
