var myVar = setInterval(function () {
    myTimer();
}, 1000);

function myTimer() {
    document.querySelector('.clock').innerText = (new Date()).toLocaleTimeString();
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.login-form input[name=name]').value,
            email: document.querySelector('.login-form input[name=email]').value
        })
    })
        .then(_ => document.querySelector('.login-form').reset());
}