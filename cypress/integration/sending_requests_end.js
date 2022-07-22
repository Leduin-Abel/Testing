/// <reference types="cypress" />

beforeEach(() => {

  //se pueden enviar request utilizando esta forma a la aplicacion
  cy.request({
    method: 'POST',
    url: '/api/reset'
  })

});

it('Sending requests', () => {

  cy
    .visit('/')

});