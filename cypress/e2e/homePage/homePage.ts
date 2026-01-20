import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePagePOM } from "../pages/homePage.page";

const homePage = new HomePagePOM();

Given('I have visited the "Home Page"', () => {
  homePage.visit();
});

When('I click the "site logo" link', () => {
  homePage.actions.click_siteLogo();
});

Then('I can confirm that the page reloads to the "Home Page"', () => {
  cy.url().then((url: string) => {
    expect(url).to.eq(Cypress.config().baseUrl + homePage.url);
  });
});
