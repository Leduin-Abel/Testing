/// <reference types="cypress" />

it('Running task', () => {

  cy
    .task('setupDb', { //Crea la tarea de organizar la base de datos
      // se complementa con el index y el setupDb de plugins
      boards: [{
        name: 'board created with .task()',
        id: 1,
        starred: false,
        user: 0
      }],
      lists: [],
      tasks: [],
      users: []
    })

  cy
    .visit('/')

});