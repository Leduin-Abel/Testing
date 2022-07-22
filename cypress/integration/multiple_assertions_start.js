/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/89872140596')
})

it('Multiple assertions', () => {

//El comando then no tiene la logica del re intento, si se desea, se debe cambiar a should 
//Then es para assertions para arreglos
  cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'bread')

  cy
    .get('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'milk')

})