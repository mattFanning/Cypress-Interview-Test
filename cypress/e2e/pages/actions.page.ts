import POM from "./POM";

export class ActionsPage implements POM {
    url = "/commands/actions";

    visit(): void {
        cy.visit(this.url);
    }

    selectors = {
        title: (): CypressDomHeadingElement => {
            return cy.get("h1").contains("Actions");
        },
    };

    assertions = {
        verifyUrl: () => {
            cy.url().should("eq", "https://example.cypress.io/commands/actions");
        },
    };
}
