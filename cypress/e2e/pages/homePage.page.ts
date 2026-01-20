import POM from "./pom";
type CypressDomElement = Cypress.Chainable<JQuery<HTMLElement>>;

export class HomePagePOM implements POM {
  url: string;

  constructor() {
    this.url = "/";
  }

  visit() {
    cy.visit(this.url);
  }

  selectors = {
    siteLogo_a: () => {
      return cy.get("a.site-logo-url");
    },
    arenasStadiums_a: () => {
      return cy.get("a.industry-panel-link");
    },

    // add any additional selectors required for your solution
    // don't worry about "ugly selectors" (we'd normally use data-testid's)
  };
  actions = {
    click_siteLogo: () => {
      this.selectors.siteLogo_a().click();
    },
    // add any additional actions required for your solution
  };
}
