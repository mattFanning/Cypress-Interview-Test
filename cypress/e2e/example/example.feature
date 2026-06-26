@test
Feature: Cypress.io Example Page

  This feature tests the candidate's ability to understand and build Cypress tests using
  Cucumber preprocessor & POM object files.  It uses https://example.cypress.io/

  Background: Going to https://example.cypress.io/
    Given I have visited the "Example Page"
  
  @example
  Scenario: Site has title "Kitchen Sink"
    When I observe the page
    Then I can confirm that the page has title "Kitchen Sink"
  

  # Test 1: see README.md for instructions
  @test1 
  Scenario: Clicking the Querying link redirects to the Querying page
    When I click the "Querying" link
    Then I can confirm that the page redirects to the "Querying" page
  

  # Test 2: see README.md for instructions
  @test2
  Scenario: Clicking the Traversal link redirects to the Traversal page
    When I click the "Traversal" link
    Then I can confirm that the page redirects to the "Traversal" page

  # Test 2: see README.md for instructions
  @test3
  Scenario: Clicking the Commands > Actions to the Actions page redirects to the Actions page
    