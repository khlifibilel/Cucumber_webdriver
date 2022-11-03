const { Given, When, Then } = require('@wdio/cucumber-framework');
 
// méthode pour accéder sur le site de la poste

Then (/^Je verifie que le lien "(.*)" est afficher$/, async (lien) => {          // c'est comme on a fait  let lien = (.*)
    await expect ($(lien)).toBeDisplayedInViewport();             
});

// Aide  
Then (/^Je verifie que le lien aide est afficher$/, async () => {       
    await expect($("//i[contains(@class,'actions__icon ph-icon ph-icon--action-help ph-icon--light ph-icon--default')]")).toBeDisplayedInViewport();             
});

//colis
Then (/^Je verifie que le lien colis est afficher$/, async () => {       
    await expect($).toBeDisplayedInViewport();             
});

Then (/^I should see a flash message saying (.*)$/, async (message) => {
 await expect($('#flash')).toBeExisting();
 await expect($('#flash')).toHaveTextContaining(message);
});



//LINKEDIN
Then (/^Je verifie que le message "(.*)" est affiché$/, async (message) => {
    

    await expect($("//a[text()='Essayez Premium gratuitement']")).toBeExisting();
    

    await expect($("//a[text()='Essayez Premium gratuitement']")).toHaveTextContaining(message);
    

});