/// <reference types="cypress" />

//Las cookies se borran entre tests 
// Se puede definir cookies preservadas para toda la suite 
/*Se guardan en support/index.js
 el comando es:  Cypress.Cookies.defaults({
  preserve: 'token_name'
 })*/

describe('Cookies', () => {

  beforeEach(() => {

    Cypress.Cookies.preserveOnce('trello_token') // preserva este cookie para el siguiente test

    cy
      .visit('/')

  })

  it('test #1', () => {

    cy
      .setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwQGV4YW1wbGUuY29tIiwiaWF0IjoxNjE1OTg5MTkyLCJleHAiOjE2MTU5OTI3OTIsInN1YiI6IjIifQ.c3HqS_RRCJp4IPYvwbUkxWPwBx4VXJa_0ArzKq7qx_M')

    cy
      .reload()

  });

  it('test #2', () => {

  });

  it('test #3', () => {

  });

});