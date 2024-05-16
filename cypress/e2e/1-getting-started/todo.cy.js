/// <reference types="cypress" />
import HomePage from "./PageObject/Home.cy"


describe('example to-do app', () => {
  before(function(){
    cy.fixture('example').then(function(data){

      this.data=data
      
    })
  })

  it('displays two todo items by default', function() {
    const homepage=new HomePage()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.server()
    cy.route('GET','data/*').as('getdata')
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    
    homepage.getsearch().type(this.data.name)
    
    cy.log(this.data.productname)
    this.data.productname.forEach(function(element){    // forEach is a javascript function .
    cy.log(element)
    })    
    // perform assertion if needed 
    //Cypress.config('pageLoadTimeout',8000)

    homepage.getproducts().as ('product')
    cy.get('@product').find('.product').should('have.length',4)
    
   //cy.wait('@getdata').its('status).should('eq',200)
    cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
    
    // cy.wait(4000) 
    // traverse 
    cy.productdetail('.products')
    cy.get('.brand').then(function(logoelement){
    cy.log(logoelement.text())
      })

    cy.pause()
    homepage.geticon().click()
    cy.get('button').contains('PROCEED TO CHECKOUT').click()
    cy.get('button').contains('Place Order').click()
    cy.get('select[style]').select('India').should('have.value','India')       //static drop down
   cy.wait(2000)
    //*******************dynamic drop down ********************************/
    // cy.get('select[style] option').each(($el,index,$list)=> {
    //   if($el.text()==='India'){        
    //     $el.click()     
    //   }})

    
    //cy.get('input.chkAgree').click()
    cy.get('input.chkAgree').check().should('be.checked')        // assertion that check box is checked
    cy.get('button').contains('Proceed').click()
  
  })
  
})
