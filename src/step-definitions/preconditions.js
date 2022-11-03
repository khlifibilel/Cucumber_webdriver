
const { Given, When, Then } = require('@wdio/cucumber-framework');


Given (/^J'accede sur le site de la poste$/, async () => {       // méhode utilise page  comme paramétre        // Action  
    await browser.url("https://www.laposte.fr/");    // ${page} = c'est un varaible récupérable 
    await browser.maximizeWindow()
    await $("//button[contains(@id,'2')][@class='tc-reset-css tc-privacy-button']").click()            
});

Given (/^I am on the (\w+) page$/, async (page) => { // méhode utilise page  comme paramétre        // Action  
await browser.url(`https://the-internet.herokuapp.com/${page}`);

});


//Linkedin 
Given (/^Je accede à la page home page Linkedin$/, async () => {              // Action  
    await browser.url("https://www.linkedin.com/login/fr?trk=homepage-basic_intl-segments-login"); 
    await browser.maximizeWindow()

});