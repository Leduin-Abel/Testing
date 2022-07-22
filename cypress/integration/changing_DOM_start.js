/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('Changing the DOM', () => {

  cy
    .get('[data-cy="star"]')
    //se puede forzar un click cuando haya un elemento invisible utilizando ".click({force: true})"
    //."invoke('show') hace que sean visibles los elementos invisbles también"

})