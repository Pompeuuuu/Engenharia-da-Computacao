
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");

function validarLogin() {
    var email = document.getElementById("loginEmail").value;
    var senha = document.getElementById("loginPassword").value;
    if(email == "eniac@gmail.com" && senha == "123"){
        alert("Login bem-sucedido! Redirecionando para a página inicial.");
        location.href = "home.html";
    } 
    else if (email == "" || senha == "") {
        alert("Por favor, preencha todos os campos.");
    } 
    else{
        alert("Senha ou usuarios incorretos!")       
    }
}

function validarUser() {
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    var criarUser = document.getElementById("criarUser").value;
    var criarEmail = document.getElementById("criarEmail").value;
    var criarSenha = document.getElementById("criarSenha").value;
        
    if (criarEmail == "" && criarSenha == ""&&  criarUser == "" &&  !er.test(criarEmail)) {
        alert("Por favor, preencha todos os campos corretamente!.");
    } 
    else if(criarEmail == ""|| !er.test(criarEmail) ) {
        alert("Por favor, preencha o email corretamente!.");
    }
    else if(criarUser == "") {
        alert("Por favor, preencha o nome corretamente!.");
    }
    else if(criarSenha == "") {
        alert("Por favor, preencha a senha corretamente!.");
    }
    else {   
        location.href = "home.html";
        alert('Usuário cadastrado com sucesso!');
    }
}

btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js"; 
});
 
btnSignup.addEventListener("click", function () {
     body.className = "sign-up-js";
});

 

