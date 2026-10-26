import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('I am on the login page', () => {
  cy.visit('https://admin.proxima.ng')
})

When('I enter a valid username', () => {
  cy.get('#email').type('ayanloyesegun+5@gmail.com')
})

When('I enter a valid password', () => {
  cy.get('#password').type('Password@@1')
})

When('I click the Login button', () => {
  cy.get('.ant-form > .justify-center').click()
})

Then("I should be redirected to the dashboard", () => {
  cy.url().should('eq', 'https://admin.proxima.ng/dashboard/overview')
})


Given('I can access Dashboard Page', () => {
   cy.url().should('eq', 'https://admin.proxima.ng/dashboard/overview')
})

When('I select a date range', () => {
  cy.get('.content > .flex > .ant-space > .ant-space-item > .ant-picker > :nth-child(1) > input')
    .clear()
    .type('2025-05-20')

  cy.get('.content > .flex > .ant-space > .ant-space-item > .ant-picker > :nth-child(3) > input')
    .clear()
    .type('2026-05-20')
})


Given('I can access User Management Page', () => {
   cy.url().should('eq', 'https://admin.proxima.ng/dashboard/overview')
})
When('I click the User Management button', () => {
  cy.get(':nth-child(2) > .w-full > .font-medium').should('be.visible').click()
})
Then('I should see the User Management page', () => {
  cy.url().should('eq','https://admin.proxima.ng/dashboard/user-management')
})

When('I enter User Management Id', () => {
  cy.get('.ant-input').click()
})
When('I search User Management Id', () => {
  cy.get('.ant-input').type('ayanloyesegun+5@gmail.com').should('be.visible')
})

Then('I should see the User Management Id', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click().should('be.visible')
})


Given('I can access Merchant Management Page', () => {
   cy.url().should('eq', 'https://admin.proxima.ng/dashboard/overview')
})
When('I click the Merchant Management button', () => {
  cy.get(':nth-child(3) > .w-full > .font-medium').should('be.visible').click()

  cy.get('.pl-10 > :nth-child(1)').should('be.visible').click()
})
Then('I should see the Merchant Management page', () => {
  cy.url().should('eq', 'https://admin.proxima.ng/dashboard/merchant-management')
})


Given('I can access Transaction Management Page', () => {
   cy.url().should('eq', 'https://admin.proxima.ng/dashboard/overview')
})
When('I click the Transaction Management button', () => {
  cy.get(':nth-child(6) > .w-full > .font-medium').should('be.visible').click()
})
Then('I should see the Transaction Management Page', () => {
  cy.url().should('eq', 'https://admin.proxima.ng/dashboard/transactions-management')
})

When('I enter Transaction Management Id', () => {
  cy.get('.ant-input').should('be.visible').click()
})
When('I search Transaction Management Id', () => {
  cy.get('.ant-input').type('PXFL1779787938225521').should('be.visible')
})

Then('I should see the Transaction Management Id', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click().should('be.visible')
})
When('I enter Transaction Management Id 2', () => {
  cy.get('.ant-input').should('be.visible').click()
})
When('I search Transaction Management Id 2', () => {
  cy.get('.ant-input').clear().type('PXFL1779730271935450').should('be.visible')
})

Then('I should see the Transaction Management Id 2', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click().should('be.visible')
})


Given('I can access Collection Management Page', () => {
   cy.url().should('eq', 'https://admin.proxima.ng/dashboard/overview')
})
When('I click the Collection Management button', () => {
  cy.get(':nth-child(7) > .w-full > .font-medium').should('be.visible').click()
})
Then('I should see the Collection Management Page', () => {
  cy.url().should('eq', 'https://admin.proxima.ng/dashboard/collections-management')
})

When('I enter Collection Management Id', () => {
  cy.get('.ant-input').should('be.visible').click()
})
When('I search Collection Management Id', () => {
  cy.get('.ant-input').type('8bb56bdd-9b3e-4c44-9335-01fc21bf4f5e').should('be.visible')
})
Then('I should see the Collection Management Id', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click().should('be.visible')
})

When('I enter Collection Management Id 2', () => {
  cy.get('.ant-input').should('be.visible').click()
})
When('I search Collection Management Id 2', () => {
  cy.get('.ant-input').clear().type('ab7ce589-5f3c-4b97-92db-9db4b5329803').should('be.visible')
})
Then('I should see the Collection Management Id 2', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click().should('be.visible')
})



Given('I can access Settlement Management Page', () => {
   cy.url().should('eq', 'https://admin.proxima.ng/dashboard/overview')
})
When('I click Settlement Management button', () => {
  cy.get(':nth-child(8) > .w-full > .font-medium').should('be.visible').click()
})
When('I click AllSettlement Management button', () => {
  cy.get('.pl-10 > :nth-child(1)').should('be.visible').click()
})
Then('I should see AllSettlement Management Page', () => {
  cy.url().should('eq', 'https://admin.proxima.ng/dashboard/settlement-management')
})

When('I enter AllSettlement Management Id', () => {
  cy.get('.ant-input').should('be.visible').click()
})
When('I search AllSettlement Management Id', () => {
  cy.get('.ant-input').type('79a3a374-f1ca-42ec-82c7-c0d3d88e5c70').should('be.visible')
})
Then('I should see AllSettlement Management Id', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click().should('be.visible')
})

When('I enter AllSettlement Management Id 2', () => {
  cy.get('.ant-input').should('be.visible').click()
})
When('I search AllSettlement Management Id 2', () => {
  cy.get('.ant-input').clear().type('84d76a88-fefb-4362-bfd6-d3983012564b').should('be.visible')
})
Then('I should see AllSettlement Management Id 2', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click().should('be.visible')
})


Given('I can access Configuration Settlement Page', () => {
   cy.url().should('eq', 'https://admin.proxima.ng/dashboard/overview')
})
When('I click Configuration Settlement button', () => {
  cy.get(':nth-child(8) > .w-full > .font-medium').should('be.visible').click()
})
When('I click Configuration Settlement', () => {
  cy.get('.pl-10 > :nth-child(2)').should('be.visible').click()
})
Then('I should see Configuration Settlement Page', () => {
  cy.url().should('eq', 'https://admin.proxima.ng/dashboard/settlement-configuration')
})

When('I enter Configuration Settlement Id', () => {
  cy.get('.ant-input').should('be.visible').click()
})
When('I search Configuration Settlement Id', () => {
  cy.get('.ant-input').type('ef539c55-23b8-43d6-9f6f-89d30598d9aa').should('be.visible')
})
Then('I should see Configuration Settlement Id', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click().should('be.visible')
})

When('I enter Configuration Settlement Id 2', () => {
  cy.get('.ant-input').should('be.visible').click()
})
When('I search Configuration Settlement Id 2', () => {
  cy.get('.ant-input').clear().type('233b1e8c-c2d0-4c2c-80a7-92391d958229').should('be.visible')
})
Then('I should see Configuration Settlement Id 2', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click().should('be.visible')
})
