/// <reference types="cypress" />
import { ApplicationManager } from '../utils/ApplicationManager';
import { LoginPage } from '../userinterface/pages/LoginPage';
import { SignUpPage } from '../userinterface/pages/SignUpPage';
import { CreateProfilePage } from '../userinterface/pages/CreateProfilePage';
import { faker } from '@faker-js/faker';

describe('Sign up', () => {
	it('should enable to create account when contractor profile form is filled', () => {
		ApplicationManager.visitPage('/');
		const loginPage = new LoginPage();
		const signUpPage = new SignUpPage();
		const createProfilePage = new CreateProfilePage();
		const validPassword = 'DeelAssessment.2022';
		loginPage.goToSignUpPage();
		signUpPage.clickContractorTab().clickNextButton();
		createProfilePage.typeFirstName(faker.name.firstName())
			.typeLastName(faker.name.lastName())
			.typeEmail(faker.internet.email())
			.typePassword(validPassword)
			.validateSubmitButtonIsEnabled();
	});
});
