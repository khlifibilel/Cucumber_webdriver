// Fichier contients steps definiton 
const { Given, When, Then } = require('@wdio/cucumber-framework');
 
// méthode pour accéder sur le site de la poste


When (/^Je clique sur le lien "(.*)"$/, async (lien) => {       
    await $(lien).click()             
});

// action


When (/^Je clique sur le lien aide$/, async () => {       
    await $("//i[contains(@class,'actions__icon ph-icon ph-icon--action-help ph-icon--light ph-icon--default')]").click()             
});





When (/^Je clique sur le lien colis$/, async () => {       
    await $("//button[@aria-expanded='false'][contains(.,'Le colis')]").click()             
});





// When (/^I login with (.*) and (.*)$/, async (username, password) => {  // W+ c'est pour récupere une chaine de carcatrer username / et password 
//  await $('#username').setValue(username);
//  await $('#password').setValue(password);
//  await $('button[type="submit"]').click();
// });



// When (/^je saisis dans le champ mail (\w+) et le champ mdp (.+)$/, async (username, password) => {  // W+ c'est pour récupere une chaine de carcatrer username / et password 
// await $("//input[contains(@id,'username')]").setValue(username);
// await $("//input[contains(@id,'password')]").setValue(password);
// await $("//button[contains(@data-litms-control-urn,'login-submit')]").click();
// });


When (/^I login with (\w+) and (.+)$/, async (username, password) => {  // W+ c'est pour récupere une chaine de carcatrer username / et password 
await $('#username').setValue(username);
await $('#password').setValue(password);
await $('button[type="submit"]').click();
});



//When Je saisis dans le champ mail "khlifi93@hotmail.fr" et le champ mdp "Bil1993@"


When (/^Je saisis dans le champ mail "(.*)" et le champ mdp "(.*)"$/, async (username, password) => {       
    await $("//input[contains(@id,'username')]").setValue(username)   
    
    await $("//input[contains(@id,'password')]").setValue(password)   
    
       
});

When (/^Je clique sur le bouton "(.*)"$/, async (btn_cliquer) => {

$(btn_cliquer).click()
await browser.pause(4000)

});


