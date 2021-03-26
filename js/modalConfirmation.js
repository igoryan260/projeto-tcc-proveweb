var abrirModal = document.querySelector("#abrirModal");
var fecharModal = document.querySelector("#fecharModal");

var modalDisplay = document.querySelector("#modal-display");

abrirModal.addEventListener("click", function() {
    modalDisplay.className = "modalConfirmation";
})

fecharModal.addEventListener("click", function() {
    modalDisplay.className = "display";
});