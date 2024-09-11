import validator from "validator";

export default class Contato {
    constructor(formClass) {
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
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        const alertNome = el.querySelector('.text-nome');
        const alertEmail = el.querySelector('.text-email');
        const alertContato = el.querySelector('.text-contato');
        let error = false;

        alertNome.innerHTML = "";
        alertEmail.innerHTML = "";
        alertContato.innerHTML = "";
        alertNome.classList.remove("alert-danger");
        alertEmail.classList.remove("alert-danger");
        alertContato.classList.remove("alert-danger");

        if (!nomeInput.value.trim()){
            alertNome.innerHTML = "*Nome é um campo obrigatório."
            alertNome.classList.add("alert-danger");
            error = true;
        }

        if (emailInput.value.trim() && !validator.isEmail(emailInput.value.trim())) {
            alertEmail.innerHTML = "*E-mail inválido.";
            alertEmail.classList.add("alert-danger");
            error = true;
        }
        
        if (!emailInput.value.trim() && !telefoneInput.value.trim()) {
            alertContato.innerHTML = "*Deve ter pelo menos email ou telefone para ser cadastrado.";
            alertEmail.innerHTML = "*Deve ter pelo menos email ou telefone para ser cadastrado.";
            alertContato.classList.add("alert-danger");
            alertEmail.classList.add("alert-danger");
            error = true;
        }

        if (!error) {
            el.submit();
        }
    }
}