function loadEmailJS() {
    return new Promise((resolve, reject) => {
        const emailjsScript = document.createElement('script');
        emailjsScript.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        emailjsScript.async = true;

        emailjsScript.onload = () => {
            emailjs.init({
                publicKey: "RP5V0Wx0WnbTSPsxO", 
            });
            resolve();
        };
        emailjsScript.onerror = () => reject(new Error("Не удалось загрузить EmailJS"));

        document.head.appendChild(emailjsScript);
    });
}
