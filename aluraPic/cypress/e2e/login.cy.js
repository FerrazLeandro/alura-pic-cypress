
describe('Login de usuários Alura Pic', () =>{

    beforeEach(() => {
       // Acessar o site Alura
       cy.visit('https://alura-fotos.herokuapp.com');
   })

    // Validar login válido usando comando externo com reaproveitamento de código
  it('Fazer login válido', () => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
    cy.contains('a', 'Logout').should('be.visible');
  })

  // Validar login inválido usando comando externo com reaproveitamento de código
  it('Fazer login inválido', () => {
    cy.login('Leandro', '123')
    cy.on ('window:alert', (str) => {
      expect(str).to.equal('Invalid user name or password')
    })
  })

})