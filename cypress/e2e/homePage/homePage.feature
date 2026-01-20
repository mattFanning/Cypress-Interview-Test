Feature: Home Page

  This feature tests the candidate's ability to understand and build Cypress tests using
  Cucumber preprocessor & POM object files.  It uses the Xtract One website.

  Background: Going to Page
    Given I have visited the "Home Page"
  
  @example
  Scenario: Clicking the site logo returns us to the homepage
    When I click the "site logo" link
    Then I can confirm that the page reloads to the "Home Page"
  

  # Test 1: see README.md for instructions
  @test1 
  Scenario: Clicking the Industries "Arena & Stadiums" panel
    When I click the Industries "Arena & Stadiums" panel
    Then I can confirm that the page redirects to the "Arenas & Stadiums" page
  

  # Test 2: see README.md for instructions
  @test2
  Scenario: Clicking the "Products" link within the control hamburger menu redirects to the "Products" page