const { Given, When, Then , But } = require('@wdio/cucumber-framework');

let x 

Given ('^I visit the website as a gues user$', function (int) {

console.log("visite de sitre avec succés ")


} );


When ('^I select the books option from the Search dropdown$', function (int) {
    console.log("slection de livre ")


Then (/^I should see the page having heading as Amazon Best Reads is getting displayed$/, function () {
        console.log();
      });
    
And (/^I click on search icon option$/, function () {
        console.log();
      });
    
But (/^I should not see the other category products$/, function (callback) {
        console.log();
      });











});



