# Cypress Interview Test

This exercise tests the candidate's ability to understand and build Cypress tests using

- Cucumber preprocessor
- Typescript
- Page Object Model (_POM_) files.

It uses the Xtract One website.

## Prerequisites

1. You will need node version 20+ installed locally
2. You will need a personal github account + git installed locally
3. You may prefer to have api keys setup for submission

## Setup

1. [Fork this repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)
2. [Clone your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#cloning-your-forked-repository)
3. `npm install` in your local repo to fetch the node modules
4. Create a PR branch for your test submission. Please include your name in the branch

Setup should be complete. The `@example` scenario should be runnable: `npx cypress open --env tags='@example'`

## Instructions

### Test 1

Using the provided feature file `cypress/e2e/homePage/homePage.feature`, fill in the missing step implementations for `@test1`.

### Test 2

Using the provided feature file `cypress/e2e/homePage/homePage.feature` do the following for `@test2`:

- write the test steps for the scenario
- implement the steps
- implement the POM object

**Notes:**

- The "control hamburger menu" is the top right "2 vertical bar" menu that expands to a full page popup with links and Recent News
- Any created POMs do not need selectors & actions, (_example `arenaStadium.page.ts`_)

### Test 3

This one doesn't require coding, just thinking.

1. Go to the "contact" page (https://xtractone.com/contact/) & examine the contact form.

2. Under **Test 3 Scenarios** in this README, list the different scenarios you could test when filling in the contact information.  
   **Note:** These should be written in full Gherkin syntax

## Submission

When ready:

1. Push your local branch to your forked github repo.
2. Create a PR from your fork to source Repo. Please include your name in the PR.
   Once submitted, email: `matthew.fanning@xtractone.com` stating completeness.
   Please include the link to your PR in the email

## Test 3 Scenarios

```gherkin


```
