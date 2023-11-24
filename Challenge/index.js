document.addEventListener('DOMContentLoaded', function () {
    var subscribeButton = document.querySelector('.btn');
    var emailInput = document.getElementById('user-text');
    var validEmailMessage = document.querySelector('.Z');
    subscribeButton.addEventListener('click', function () {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailInput.value)) {
            subscribeButton.style.backgroundColor = 'orange';
            validEmailMessage.style.color = 'green';
            validEmailMessage.innerHTML = 'Valid Email';
            window.location.href = 'index - 2.html';
        } else {
            validEmailMessage.style.color = 'red';
            validEmailMessage.innerHTML = 'Not Valid Email';
        }
    });
});