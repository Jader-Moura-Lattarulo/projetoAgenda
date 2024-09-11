import validator from "validator";

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        const alertEmail = el.querySelector('.text-email');
        const alertPassword = el.querySelector('.text-password');
        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            alertEmail.innerHTML = "* E-mail inválido";
            alertEmail.classList.add("alert-danger");
            error = true;
        }
        
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            alertPassword.innerHTML = "* A senha precisa ter entre 3 e 50 caracteres";
            alertPassword.classList.add("alert-danger");
            error = true;
        }

        if(!error) {
            el.submit();
        }
    }
}