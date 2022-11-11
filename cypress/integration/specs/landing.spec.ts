/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { LandingPage } from '../userinterface/pages/LandingPage';
import { ApplicationManager } from '../utils/ApplicationManager';
describe('Landing Page', () => {
	it('Should allow to complete and submit contact form', () => {
		ApplicationManager.visitPage('/');
		const name = faker.name.firstName();
		const landingPage = new LandingPage();
		landingPage.typeName(name);
		landingPage.typeEmail(faker.internet.email());
		landingPage.typePhone(faker.phone.phoneNumber('+5411########'));
		landingPage.typeSubject(faker.internet.domainName());
		landingPage.typeMessage(faker.lorem.paragraph());
		landingPage.submit();
		cy.contains(`Thanks for getting in touch ${name}!`).first();
	});
});
