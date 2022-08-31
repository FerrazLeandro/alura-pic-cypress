describe('Cadastro de usuários Alura Pic', () =>{

    beforeEach(() => {
       // Acessar o site Alura
       cy.visit('/');
   })

   // Validar mensagens ao clicar em cadastrar sem preencher nada
  it('Verificação de campos cadastrais sem preencher nada', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
  })

  // Validar mensagem de e-mail inválido
  it('Verificação de e-mail inválido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('test.com.br')
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
  })

  // Validar mensagem de nome inválido
  it('Verificação de nome inválido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="fullName"]').type('a')
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
  })

  // Validar mensagem de usuário inválido
  it('Verificação de usuário inválido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="userName"]').type('a')
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
  })

  // Validar mensagem de usuário inválido com letra maiúscula
  it('Verificação de usuário inválido com letra maiúscula', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="userName"]').type('ABC')
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
  })

  // Validar mensagem de senha inválido
  it('Verificação de senha inválida', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="password"]').type('a')
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
  })

  // Realizar teste de cadastro de usuário pegando dados de um arquivo json (massa de dados)
  const usuarios = require('../fixtures/usuarios.json');
  usuarios.forEach(usuario => {
    it('Cadastra usuario ' + usuario.fullName, () => {
      cy.contains('a', 'Register now').click();
      cy.get('input[formcontrolname="email"]').type(usuario.email);
      cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
      cy.get('input[formcontrolname="userName"]').type(usuario.userName);
      cy.contains('.text-success', 'User available').should('be.visible');
      cy.get('input[formcontrolname="password"]').type(usuario.passWord);
      cy.contains('button', 'Register').click();
      cy.contains('button', 'Register').click();
      cy.contains('a', 'Register now').should('be.visible');
    })
  })
   
})