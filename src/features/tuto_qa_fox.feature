Feature: search of various  product categoeire should be possible

        Scenario: User should be able to search for the prodcuvts under books categary

            Given I visit the website as a gues user
             When I select the books option from the Search dropdown
              And I click on search icon option
             Then I should see the page having heading as Amazon Best Reads is getting displayed
              But I should not see the other category products


