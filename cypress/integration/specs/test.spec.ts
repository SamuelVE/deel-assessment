/// <reference types="cypress" />
import { ApplicationManager } from '../utils/ApplicationManager';

describe('Test Configuration', () => {
	it('Should open google page', () => {
		ApplicationManager.visitPage('/');
	});
});
