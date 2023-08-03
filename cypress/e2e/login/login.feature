Feature: Login to Application


    As valid user 


    i want to Login into Application

Scenario: Valid Login

    Given I open login page
    When I submit login
    Then I should see myhomepage
