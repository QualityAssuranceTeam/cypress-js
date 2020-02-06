/// <reference types="cypress" />

describe('My First Test', function() {
  it('Visit localhost', function() {
    cy.visit('http://localhost:2372/');
  })
})