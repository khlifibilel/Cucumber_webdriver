const { Given, When, Then } = require('@wdio/cucumber-framework');



//Linkedin remettre en precondition !!! 
Given (/^Je accede à la page home page Linkedin$/,async () =>  {            
    await browser.url("https://www.linkedin.com/login/fr?trk=homepage-basic_intl-segments-login") 
    await browser.maximizeWindow() 
    
}

);


//LINKEDIN verifier message  iiiiiiiicccccciiii 
Then (/^Je verifie que le message est affiché "(.*)"$/, async (message) => {
    //await expect($("//a[text()='Essayez Premium gratuitement']")).toBeExisting();
    await expect($("//a[text()='Essayez Premium gratuitement']")).toHaveTextContaining(message);
    //await expect($("//a[text()='Essayez Premium gratuitement']")).toHaveTextContaining(message);

    console.log("retour bilel ")
    }
);


//2 eme    Marche OK

Then (/^Je verifier mon nom est afficher "(.*)"$/, async (nom_prenom) => {

    await expect ($("//div[@class='t-16 t-black t-bold'][contains(.,'Bilel Khlifi')]")).toBeExisting();
    console.log (nom_prenom)
    return nom_prenom

    }
    );


//La Poste
Given (/^Je accede sur le site de la poste$/, async () => {       // méhode utilise page  comme paramétre        // Action  
    await browser.url("https://www.laposte.fr/");    // ${page} = c'est un varaible récupérable 
    await browser.maximizeWindow()
    await $("//button[contains(@id,'2')][@class='tc-reset-css tc-privacy-button']").click()            
});




// CLiquer lien Aide de site la poste

When (/^Je clique sur le lien aide "(.*)"$/, async (element) => {       
    await $(element).click()   
    console.log("element bien cliquer2")          
});




//Hereokuapp
Given (/^I am on the (\w+) page$/, async (page) => { // méhode utilise page  comme paramétre        // Action  
await browser.url(`https://the-internet.herokuapp.com/${page}`);

});


