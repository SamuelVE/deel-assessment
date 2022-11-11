/// <reference types="cypress-xpath" />
/// <reference types="cypress" />

export class ApplicationManager {
	static visitPage(page: string) {
		cy.viewport(Cypress.env('VIEWPORT'));
		cy.visit({
			url: page,
			failOnStatusCode: false
		});
	}
}
