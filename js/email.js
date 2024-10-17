function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.classList.add('registration__error-message'); 
}

function clearError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = '';
    errorElement.classList.remove('registration__error-message'); 
}

function validateForm() {
    let isValid = true;

    const nameInput = document.getElementById('name');
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

    if (!nameRegex.test(nameInput.value)) {
        showError(nameInput, 'Пожалуйста, введите корректное имя (только буквы).');
        isValid = false;
    } else {
        clearError(nameInput);
    }

    const emailInput = document.getElementById('email');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Пожалуйста, введите корректный адрес электронной почты.');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    return isValid;
}

function sendEmail(event) {
    event.preventDefault(); 

    if (!validateForm()) {
        return; 
    }

    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        tariff: document.querySelector('input[name=tariff]:checked').value,
        equipment: document.querySelector('input[name=equipment]:checked').value,
        codePhoneCountry: document.getElementsByClassName('iti__selected-dial-code')[0].innerHTML
    };

    emailjs.send("service_7zjim9m", "template_9jkma0w", params)
        .then(function(res) {
            showModal();
            document.getElementById('registrationForm').reset(); 
        })
        .catch(function(error) {
            console.error("Ошибка отправки формы: ", error);
        });
}

function showModal() {
    let modal = document.getElementById('successModal');
    let closeBtn = document.querySelector('.close-btn');

    modal.style.display = "flex"; 

    closeBtn.onclick = function() {
        modal.style.display = "none"; 
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

document.getElementById('registrationForm').addEventListener('submit', sendEmail);




