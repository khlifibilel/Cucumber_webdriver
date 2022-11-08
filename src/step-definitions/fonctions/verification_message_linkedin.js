

export default async (message) => {
    await expect($("//a[text()='Essayez Premium gratuitement']")).toBeExisting();
    await expect($("//a[text()='Essayez Premium gratuitement']")).toHaveTextContaining(message);
    };