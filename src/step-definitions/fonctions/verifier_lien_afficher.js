export default async (lien) => {          // c'est comme on a fait  let lien = (.*)
    await expect ($(lien)).toBeDisplayedInViewport()  
};   