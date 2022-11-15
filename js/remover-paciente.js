var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function () {
        console.log("Fui clicado com duplo click");
        this.remove();
    });
});