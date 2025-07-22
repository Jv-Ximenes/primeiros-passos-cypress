import userData from '../fixtures/userData.json'


describe('Orange HMC Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']", 
    passaswordField: "[name='password']",
    loginButton: '.oxd-button',
    sectionTitle: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialsAlert: '.oxd-alert',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton:'.--close',
    submitButton: "[type='submit']",
  }

  it.only('User Infos Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucces.username)
    cy.get(selectorsList.passaswordField).type(userData.userSucces.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.visit('/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorsList.firstNameField).clear().type('Sherek')
    cy.get(selectorsList.middleNameField).clear().type('Ximendes')
    cy.get(selectorsList.lastNameField).clear().type('De Riba')
    cy.get(selectorsList.genericField).eq(3).clear().type('IDTEST')
    cy.get(selectorsList.genericField).eq(4).clear().type('OTHERID')
    cy.get(selectorsList.genericField).eq(5).clear().type('LICENSETEST')
    cy.get(selectorsList.genericField).eq(6).clear().type('1995-21-11')
    //cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast').should('contain', 'Successfully Updated')



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