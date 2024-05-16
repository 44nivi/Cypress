import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User is at the login page", function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
});

When("User enters username as {string} and password as {string}", (username, password) => {
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)
});

Then("User clicks on login button", () => {
    cy.get('#btnLogin').click()
});

Then("User is able to successfully login to the Website", () => {
    cy.get('#welcome').should('be.visible', {timeout: 10000})
});