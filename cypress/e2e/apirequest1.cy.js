describe('apirequest', () => {
    
      
  
    it('getCall', function() {
      cy.request('GET', 'https://www.amazon.in/ref=nav_logo')
      .its('status').should('equal',200);
      })
      it('postCall',function(){
        cy.request({
            method: 'POST',
            url: 'https://unagi.amazon.in/1/events/com.amazon.csm.csa.prod',
            body: {
                   title: "baby toys"
            }
        })
        .its('status').should('equal',201)
      })
    })