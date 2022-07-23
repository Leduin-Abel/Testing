/// <reference types="cypress" />

it('Stubbing response', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }).as('boardList')

    //"forceNetworkError:true" fuerza un error de red
  cy
    .visit('/')

});