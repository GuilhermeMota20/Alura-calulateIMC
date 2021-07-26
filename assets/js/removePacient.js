// pegar todas as tr
var tabela = document.querySelector('table')

// quando o elemnto pai for clicado, faremos a seguinte pergunta
// qual dos seus filhos foi clicado??
// ao recebermos a resposta vamos remover o elemento filho clicado 
tabela.addEventListener('dblclick', function(event) {

    // event.target = é o alvo do evento
    // parentNode = Pai do elemento alvo, ou seja, no nosso caso seria o TR
    event.target.parentNode.classList.add('fadeOut')

    // espere 500ms para executar esta função
    setTimeout(function() {
        event.target.parentNode.remove() // com isso vamos remover o TR, a linha da tabela    
    }, 400) // tempo que será levado até ser removido em milisegundos

})

// ============================================

// var pacientes = document.querySelectorAll('.paciente')
/* pacientes.forEach(function(paciente) {
    paciente.addEventListener('dblclick', function() {
        
        // remover linhas da lista
        this.remove() // this = a linha(paciente) que foi clicada será removida


    })
}) */