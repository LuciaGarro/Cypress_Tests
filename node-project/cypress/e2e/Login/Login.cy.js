describe('Login test', () => {
  beforeEach(()  => {
    cy.log("Visit page");
    cy.visit('https://admin-demo.nopcommerce.com/login');
  })
  it('visit the login page', () => {

    cy.log("Click on email field")
    cy.get("#Email").click()

    cy.log('Click on email field')
    cy.get('#Email').clear('admin@yourstore.com')

    cy.log('Click on email field')
    cy.get('#Email').type('lucia@mail.com')

    cy.log("Click on pasword field")
    cy.get("#Password").click()

    cy.log("Click on password field")
    cy.get("#Password").type("Aa123456")

    cy.log("Click on login button")
    cy.get(".login-button").click()
 
  })
})