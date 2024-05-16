///<reference types="Cypress"/>
describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    })

    it('my firdt test case!',()=> {
        cy.visit("www.amazon.in");
        cy.get("#twotabsearchtextbox").type('iphone');
        cy.get("#nav-search-submit-button").click();
        cy.get(".a-size-mini a-spacing-none a-color-base s-line-clamp-2").click();
        
    })
  })