import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ExamplePOM } from "../pages/example.page";
import { QueryingPage } from "../pages/querying.page";

const examplePage = new ExamplePOM();
const queryingPage = new QueryingPage();

Given('I have visited the "Example Page"', () => {
  examplePage.visit();
});

When("I observe the page", () => {
  cy.log("observing the page...");
});

When(`I click the "Querying" link`, () => {
  examplePage.actions.clickQueryingLink();
});

Then('I can confirm that the page has title "Kitchen Sink"', () => {
  examplePage.selectors.title().should("be.visible");
});

Then('I can confirm that the page redirects to the "Querying" page', () => {
  // Calls the assert function from QueryingPage to verify the URL
  queryingPage.assertions.verifyUrl();
  //Verifies the visibility of page title & its wording
  queryingPage.selectors.pageTitle().should("be.visible").and("contain", "Querying");
});
