import userData from '../fixtures/userData.json'


describe('Orange HMC Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passaswordField: "[name='password']",
    loginButton: '.oxd-button',
    sectionTitle: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialsAlert: '.oxd-alert'
  }
  
  
  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucces.username)
    cy.get(selectorsList.passaswordField).type(userData.userSucces.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passaswordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })
  
})