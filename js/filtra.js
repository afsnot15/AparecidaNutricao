var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(paciente => {
        var nome = paciente.querySelector(".info-nome").textContent;
        var expressao = new RegExp(this.value, "i");

        if (this.value.length > 0 && !expressao.test(nome)) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    })
});

