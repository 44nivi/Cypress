class HomePage
{
getsearch(){
    return cy.get('.search-keyword')
}

getproducts(){
    return cy.get('.products')
}
geticon(){
    return cy.get('.cart-icon')
}
}
export default HomePage