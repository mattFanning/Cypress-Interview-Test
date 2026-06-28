import POM from "./pom";
type CypressDomElement = Cypress.Chainable<JQuery<HTMLElement>>;
type CypressDomHeadingElement = Cypress.Chainable<JQuery<HTMLHeadingElement>>;

export class ExamplePOM implements POM {
  url: string;

  constructor() {
    this.url = "/";
  }

  visit() {
    cy.visit(this.url);
  }

  /* Notes:
   * This isn't the full implementation, just what's needed for the Tests.
   * Normally we'd use data-testids instead of "ugly selectors", but for this test use whatever is available.
   */
  selectors = {
    title: (): CypressDomHeadingElement => {
      return cy.get("h1").contains("Kitchen Sink");
    },

    actionsLink: (): CypressDomElement => {
      return cy.get('a[href="/commands/actions"]').contains("Actions");
    },

    queryingLink: (): CypressDomElement => {
      return cy.get('a[href="/commands/querying"]').contains("Querying");
    },

    traversalLink: (): CypressDomElement => {
      return cy.get('a[href="/commands/traversal"]').contains("Traversal");
    },
  };
  actions = {
    clickActionsLink: () => {
      this.selectors.actionsLink().click({ force: true });
    },

    clickQueryingLink: () => {
      this.selectors.queryingLink().click({ force: true });
    },

    clickTraversalLink: () => {
      this.selectors.traversalLink().click({ force: true });
    },
  };
}
