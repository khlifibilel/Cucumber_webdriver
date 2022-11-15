//import verifier_lien_afficher from './fonctions/verifier_lien_afficher';

const { Given, When, Then } = require('@wdio/cucumber-framework');


//LINKEDIN verifier message 
Then (/^Je verifie que le message est affiché "(.*)"$/, async (message) => {
    await expect($("//a[text()='Essayez Premium gratuitement']")).toBeExisting(message);
    await expect($("//a[text()='Essayez Premium gratuitement']")).toHaveTextContaining(message);
    
    }

);








// méthode pour accéder sur le site de la poste

// Then (/^Je verifie que le lien "(.*)" est afficher$/,    //verifier item colis est trouvable 
// verifier_lien_afficher         
// );



//colis
Then (/^Je verifie que le lien colis est afficher$/, async () => {       
    await expect($).toBeDisplayedInViewport();             
});




Then (/^I should see a flash message saying (.*)$/, async (message) => {
 await expect($('#flash')).toBeExisting();
 await expect($('#flash')).toHaveTextContaining(message);
});
    


// Verifier lien Aide    => a deplacer dans verification.mjs
Then (/^Je verifie que le lien aide est afficher "(.*)"$/, async (lien) => {       
    await expect ($(lien)).toBeDisplayedInViewport();    
    console.log("lien trouver")          
});
