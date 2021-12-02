/// <reference types = "cypress"/>

describe('Enade Teste', () => {

    describe('Teste Exemplo', () => {
        it('login', () => {
            cy.get('#formLogin\\\:txtLogin').type("ze@ze.com.br")
            cy.get('#formLogin\\\:txtSenha').type("123")
            cy.get('#formLogin\\\:j_idt16 > .ui-button-text').click()
        });
    });
});




