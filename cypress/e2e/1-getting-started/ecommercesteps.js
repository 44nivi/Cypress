import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import POM from "C:\\Users\\nraman\\Desktop\\Cypress workspace\\cypress\\POM.cy.js"

before(function() {

    cy.fixture('example').then(function(data)
    {
        this.data=data
    })
})


Given("start with the webiste",()=>{
   
   
        cy.visit('https://www.amazon.com/')
        
        
})
// When("login with {string} and {string}",function(username,password){
//     const homepage=new POM()
//      cy.get('#nav-signin-tooltip > .nav-action-signin-button').click()
//      homepage.getUsername().type(username)
//      homepage.getUsername().should('have.value',username)  //Assert the data name with the value 
//      homepage.getUsername().should('have.attr','maxlength',this.data.length) //Assert the data maximum length with the provided value
//      cy.get('#continue').click()
//      homepage.getPassword().type(password)
//      homepage.getSubmit().click()
// })

When("search for an item",()=>{
    const homepage=new POM()
    homepage.getTextbox().type('iphone')
    homepage.getSearch().click()
})

Then("list the items in a text file",function(){
    cy.get('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"] ').each(($el,index,$list)=>{

        const prod=[...$el].map((element) => Cypress.$(element).text());
        prod.forEach(function(productNames)  {
        const lst=productNames.split()
        cy.log(lst)
        const filePath = 'product_names.xls';
        const fileContent = lst.join('\n');
        cy.writeFile(filePath, lst + '\n', { flag: 'a+' });

    });
})

})