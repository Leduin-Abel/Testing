/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/89872140596')
})

it('Chaining commands', () => {

  /*cy
    .get('[data-cy="task"]')
    .eq(1)
    .should('have.text', 'milk') //Cuando se encadenan comandos, se pasa informacion de izq a der.
    //De manera que lo que el resultado del get o "el yield del get" es pasado al eq y lo mismo al should*/

  //Si un comando en cadena no pasa, intentara el comando anterior a ese, pero no toda la cadena

});