describe('Login test', () => {
  it('should visit the login page', () => {
    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
  })
})