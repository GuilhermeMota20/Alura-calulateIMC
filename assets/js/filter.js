var campoFiltro = document.querySelector('#filtrar-tabela')

// toda vez que digitar, executar a filtragem
campoFiltro.addEventListener('input', function() { // input: evento de digitação

    // pegar todos os nomes dos pacientes na tabela
    var pacientes = document.querySelectorAll('.paciente')

    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++) {

            // dentro de um paciente
            var paciente = pacientes[i]
            // estamos buscando um td que tem a classe info-nome
            var tdNome = paciente.querySelector('.info-nome')
            var nome = tdNome.textContent // extrair valor 
        
            // expressão regular
            // 1 valor: o que quero que busque? | 2 valor: como quer que busque?
            var expressao = new RegExp(this.value, 'i') 

            // se o nome digitado for diferente do paciente já existente, tire aqueles que não tem o mesmo valor
            if(!expressao.test(nome)) {
                paciente.classList.add('invisible')
    
            } else {
                // se tiver remova a classe invisible, para deixa-lo visivel
                paciente.classList.remove('invisible')
            }
        }

    } else {
        for(var i = 0; i < pacientes.length; i++) {

            var paciente = pacientes[i]
            paciente.classList.remove('invisible')

        }
    }
    
}) 