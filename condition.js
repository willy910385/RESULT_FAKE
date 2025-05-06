// 表單驗證函式
function validateForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailAlert = document.getElementById('email-alert');
    const passwordAlert = document.getElementById('password-alert');

    let isValid = true;

    emailAlert.style.display = 'none';
    passwordAlert.style.display = 'none';

    if (!email.value) {
        emailAlert.style.display = 'block';
        isValid = false;
    }

    if (password.value.length < 6) {
        passwordAlert.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('你被詐騙了!!');
    }
}

// 表單提交事件處理
document.getElementById('login-form').onsubmit = function (event) {
    event.preventDefault();
    validateForm();
};

// 點擊事件處理
document.querySelectorAll('.links a').forEach(link => {
    link.onclick = function () {
        alert('網路忙碌中，請稍後在試');
    };
});