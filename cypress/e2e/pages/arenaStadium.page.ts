import POM from "./pom";
type CypressDomElement = Cypress.Chainable<JQuery<HTMLElement>>;

export class ArenaStadiumPage implements POM {
  url: string;

  constructor() {
    this.url = "/industries/arenas-stadiums/";
  }

  visit() {
    cy.visit(this.url);
  }

  selectors = {
    // not required for test
  };
  actions = {
    // not required for test
  };
}
