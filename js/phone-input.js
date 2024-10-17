const input = document.querySelector("#phone");
window.iti = window.intlTelInput(input, {
    initialCountry: "ua",
    separateDialCode: true,
    strictMode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js",
});
