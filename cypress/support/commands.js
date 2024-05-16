// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("productdetail",(products) => { 

    cy.get(products).find('.product').each(($el,index,$list)=> {
        const textveg= $el.find('h4.product-name').text()
        if(textveg.includes('Capsicum')){         // includes defines the substring from any string
          $el.find('button').click()       // will have no harm since only one button to click or 
                                          //.contains('ADD TO CART').click() can be applied.
        }
 })

})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })