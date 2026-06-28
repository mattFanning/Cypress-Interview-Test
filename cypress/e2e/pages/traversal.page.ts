import POM from "./POM";

export class TraversalPage implements POM {
    url = "/commands/traversal";

    visit(): void {
        cy.visit(this.url);
    }

    selectors = {
        title: (): CypressDomHeadingElement => {
            return cy.get("h1").contains("Traversal");
        },
    };

    assertions = {
        verifyUrl: () => {
            cy.url().should("eq", "https://example.cypress.io/commands/traversal");
        },
    };
}
