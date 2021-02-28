var btnLogin = document.querySelector("#login ");
var btnCadastro = document.querySelector("#cadastro");

var conteudoDisplayLogin = document.querySelector("#conteudo-display-login");
var conteudoDisplayCadastro = document.querySelector("#conteudo-display-cadastro");

btnLogin.addEventListener("click", function() {
    btnLogin.className = "title-form-login title-form active";
    btnCadastro.className = "title-form-cadastro title-form";

    conteudoDisplayCadastro.className = "desactive-content";
    conteudoDisplayLogin.className = "";

});

btnCadastro.addEventListener("click", function() {
    btnLogin.className = "title-form-login title-form ";
    btnCadastro.className = "title-form-cadastro title-form active";

    conteudoDisplayCadastro.className = "";
    conteudoDisplayLogin.className = "desactive-content";
});