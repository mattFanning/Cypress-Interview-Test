import POM from "./POM";

export class QueryingPage implements POM {
    url = "/commands/querying";

    visit(): void {
        cy.visit(this.url);
    }

    selectors = {
        pageTitle: () => cy.get("h1"),
    };

    assertions = {
        verifyUrl: () => {
            cy.url().should("eq", "https://example.cypress.io/commands/querying");
        },
    };
}
