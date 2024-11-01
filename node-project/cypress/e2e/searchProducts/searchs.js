describe('Login test', () => {
  beforeEach(()  => {
    cy.log("Visit page");
    cy.visit('https://www.mercadolibre.com.uy/');
  })
  it('visit the login page', () => {

    cy.log("Click on search bar")
    cy.get("input.nav-search-input").click()
    cy.get('input.nav-search-input').type("Computadora")

   cy.log("Click on search button")
   cy.get('.nav-search-btn').click()

   cy.log("Validate the search")
   cy.get('.poly-card poly-card--list').should('contains.text', 'Notebook Asus')


   cy.log("Click on search button")
   cy.get('.poly-component__brand').click()

   cy.log("Validate a item searched")
   cy.get('.ui-pdp-gallery__figure').should('have.lenght', 8)

  })
})