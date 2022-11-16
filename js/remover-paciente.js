var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.remove();
});

//pacientes.forEach(paciente => {
 //   paciente.addEventListener("dblclick", function () {
   //     console.log("Fui clicado com duplo click");
     //   this.remove();
    //});
//});