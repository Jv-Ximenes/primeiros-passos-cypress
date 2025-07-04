describe('Orange HMC Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passaswordField: "[name='password']",
    loginButton: '.oxd-button',
    sectionTitle: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialsAlert: '.oxd-alert'
  }
  
  
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboard')

  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('test123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get('.oxd-alert').contains('Invalid credentials')
  })
  
})