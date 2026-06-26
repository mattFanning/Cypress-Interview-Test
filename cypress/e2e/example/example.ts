import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ExamplePOM } from "../pages/example.page";

const examplePage = new ExamplePOM();

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
  cy.url().then((url: string) => {
    // TODO: update this to use a POM structure
    expect(
      url === "https://example.cypress.io/commands/querying",
      `incorrect url address: ${url}`,
    );
  });
});
