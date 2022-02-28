
Feature: Searching for Products

    I want to search availability of different Products

    Scenario: Navigating to E-commerce and Search Mac Devices
        Given I open home page
        When I search for "Mac"
        Then I should see Product Available

    Scenario: Navigating to E-commerce and Search Monitor Devices
        Given I open home page
        When I search for "Printers"
        Then I should Not see Product Available
    
    Scenario: Navigating to E-commerce and Search Samsung Devices
        Given I open home page
        When I search for "Samsung"
        Then I should see Product Available


       





