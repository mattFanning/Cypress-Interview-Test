# Cypress Interview Test

This exercise tests the candidate's ability to understand and build Cypress tests using

- Cucumber preprocessor
- Typescript
- Page Object Model (_POM_) files.

It uses the cypress.io kitchen sink website (https://example.cypress.io/).

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

1. Create a POM for cypress.io's "Querying" page _(link off of example page; just add the selectors/actions you need, not everything)_.
2. Using the provided feature file `cypress/e2e/example/example.feature`, update `@test1`'s "then" step to use your new POM.

### Test 2

Using the provided feature file `cypress/e2e/example/example.feature` do the following for `@test2`:

- implement the steps
- implement any POM objects necessary for this exercise _(just add the selectors/actions you need, not everything)_

### Test 3

Using the provided feature file `cypress/e2e/example/example.feature` do the following for `@test3`:

- write the steps
- implement the steps
- implement any POM objects necessary for this exercise _(just add the selectors/actions you need, not everything)_

## Submission

When ready:

1. Push your local branch to your forked github repo.
2. Create a PR from your fork to source Repo. Please include your name in the PR.
   Once submitted, email: `matthew.fanning@xtractone.com` stating completeness.
   Please include the link to your PR in the email
