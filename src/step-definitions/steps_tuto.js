const { Given, When, Then } = require('@wdio/cucumber-framework');

let x 

Given ('I buy drilling toot worth "${int}"', function (int) {
x= int 
} );


Given ('I buy the plant worth "${int}"', function (int) {
x= x + int 


});

Then ('Total due amount is ${int}',function (int)
{console.log("résultat" +   x)}

);
