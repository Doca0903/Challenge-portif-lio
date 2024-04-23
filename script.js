
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
      errorInput(username, "Preencha seu nome")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputAssunto(){
    const assuntoValue = assunto.value;

    if(assuntoValue === ""){
        errorInput(assunto, "O assunto é obrigatório");
    }else if(assuntoValue.length > 50){
        errorInput(assunto, "O assunto pode ter no máximo 50 caracteres")    
    }else{
        const formItem = assunto.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputMensagem(){
    const mensagemValue = mensagem.value;

    if(mensagemValue === ""){
        errorInput(mensagem, "A mensagem é obrigatória");
    }else if(mensagemValue.length > 300){
        errorInput(mensagem, "A mensagem pode ter no máximo 300 caracteres")    
    }else{
        const formItem = mensagem.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputAssunto();
    checkInputMensagem();
  
    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    })

    if(isValid){
        alert("Enviado com sucesso!")
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}