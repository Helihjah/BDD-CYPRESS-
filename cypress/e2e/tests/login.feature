Feature: Login

Scenario: Successful Login
  Given I am on the login page
  When I enter a valid username
  And I enter a valid password
  And I click the Login button
  Then I should be redirected to the dashboard


Scenario: Access Dashboard

  Given I am on the login page
  When I enter a valid username
  And I enter a valid password
  And I click the Login button
  Then I should be redirected to the dashboard

  Given I can access Dashboard Page
  When I select a date range


Scenario: Access User Management

  Given I am on the login page
  When I enter a valid username
  And I enter a valid password
  And I click the Login button
  Then I should be redirected to the dashboard

  When I click the User Management button
  Then I should see the User Management page
  When I enter User Management Id
  When I search User Management Id
  Then I should see the User Management Id

  Scenario: Access Merchant Management

  Given I am on the login page
  When I enter a valid username
  And I enter a valid password
  And I click the Login button
  Then I should be redirected to the dashboard

  When I click the Merchant Management button
  Then I should see the Merchant Management page


  Scenario: Access Transaction Management

  Given I am on the login page
  When I enter a valid username
  And I enter a valid password
  And I click the Login button
  Then I should be redirected to the dashboard

  When I click the Transaction Management button
  Then I should see the Transaction Management Page
  When I click the Transaction Management button
  Then I should see the Transaction Management Page
  When I enter Transaction Management Id
  When I search Transaction Management Id
  Then I should see the Transaction Management Id
  When I enter Transaction Management Id 2
  When I search Transaction Management Id 2
  Then I should see the Transaction Management Id 2
  

  Scenario: Access Collection Management

  Given I am on the login page
  When I enter a valid username
  And I enter a valid password
  And I click the Login button
  Then I should be redirected to the dashboard

  When I click the Collection Management button
  Then I should see the Collection Management Page
  When I click the Collection Management button
  Then I should see the Collection Management Page
  When I enter Collection Management Id
  When I search Collection Management Id
  Then I should see the Collection Management Id
  When I enter Collection Management Id 2
  When I search Collection Management Id 2
  Then I should see the Collection Management Id 2


  
  Scenario: Access Settlement Management

  Given I am on the login page
  When I enter a valid username
  And I enter a valid password
  And I click the Login button
  Then I should be redirected to the dashboard

  When I click Settlement Management button
  When I click AllSettlement Management button
  Then I should see AllSettlement Management Page
  When I enter AllSettlement Management Id 
  When I search AllSettlement Management Id 
  Then I should see AllSettlement Management Id 
  When I enter AllSettlement Management Id 2
  When I search AllSettlement Management Id 2
  Then I should see AllSettlement Management Id 2


  Scenario: Access Configuration Settlement

  Given I am on the login page
  When I enter a valid username
  And I enter a valid password
  And I click the Login button
  Then I should be redirected to the dashboard

  When I click Settlement Management button
  When I click Configuration Settlement 
  Then I should see Configuration Settlement Page
  When I enter Configuration Settlement Id 
  When I search Configuration Settlement Id 
  Then I should see Configuration Settlement Id 
  When I enter Configuration Settlement Id 2
  When I search Configuration Settlement Id 2
  Then I should see Configuration Settlement Id 2