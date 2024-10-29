const contact__form = document.getElementById('contact__form');

contact__form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const massage = document.getElementById('massage').value;

    const newUser = {
        name: name,
        email: email,
        massage: massage
    };

    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Пользователь добавлен:', data);
    })
    .catch(error => console.error('Ошибка:', error));
});

fetch("http://localhost:3000/users")
.then((response) => {
    if (!response.ok) {
        throw new Error("Сетевая ошибка");
    }
    return response.json();
})
.then((data) => consolel.log(data))
.catch((error) => console.error("Ошибка:", error));

const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("send");

emailInput.addEventListener('input', function() {
const emailValue = emailInput.value;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(emailValue)) {
    emailInput.style.borderColor = 'red';
    submitBtn.disabled = true;
} else {
    submitBtn.disabled = false;
    emailInput.style.borderColor = '#03f5fd';
}
return emailPattern.test(emailValue)
});

document.getElementById('send').addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    alert('Сообщение отправлено!');
    this.submit();
});

document.getElementById('photo').addEventListener('click', function() {
    alert('Привет, я Вероника! Жду Вашего сообщения, напишите мне!');
});


