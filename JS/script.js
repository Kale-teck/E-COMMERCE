const camposdoFormulario = document.body.querySelectorAll("input")
// pega todos os campos obrigatórios do formulário

camposdoFormulario.forEach((campo) => { //para cada campo executa esta função
   // campo captura nossos eventos
   // evento.addEve... escuta("blur === quando o usuário tira o foco", faz...)
   campo.addEventListener("blur", () => verificaCampo(campo))// Um addEv... recebe o ("evento", comando ou função JS, neste caso uma arrow function que executa verificaCampo()//
})

// essa função também recebe o evento para que possa trabalhá-lo
function verificaCampo(campo) {
   console.log('oi')
}