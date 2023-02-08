// IIFE : 함수 정의와 동시에 바로 실행하려면
// (함수정의)();
(() => {
    'use strict'
    const form = document.querySelector('.needs-validation')
    form.addEventListener('submit', e => {
        if (!form.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false); // addEventListener
})();