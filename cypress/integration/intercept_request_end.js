/// <reference types="cypress" />

it('Intercept requests', () => {

  cy
    .intercept({  //intercepta comandos/requests
      method: 'POST',
      url: '/api/boards'
    }).as('createBoard')  // nombra el comando con un alias 

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('launching a rocket{enter}')

  cy
    .wait('@createBoard') //espera a que el comando se de
    .then( (board) => {
      expect(board.response.statusCode).to.eq(201)
      expect(board.request.body.name).to.eq('launching a rocket')
    })

});