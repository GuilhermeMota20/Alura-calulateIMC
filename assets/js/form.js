// pegar botão
var btnAdd = document.querySelector('#adicionar-paciente')

// função anônima responsável por criar e imprimir elementos no Html
btnAdd.addEventListener('click', function() {
    
    event.preventDefault() // previnir o comportamento padrão do btn, que seria de recarregar a página após sua execução. Com isso, ele deixa de recarregar a página.

    var form = document.querySelector('#form-adiciona') // pegando o form

    // extrair informações do paciente presentes no form
    var paciente = obtemPacienteFormulario(form)

    // se houver erro exiba mensagens
    var erros = validaPaciente(paciente)

    if(erros.length > 0) {
        exibeMensagensDeErro(erros)
        return
    }

    // adicionando pacientes na tabela
    addPacienteInTable(paciente)

    form.reset() // ao clicar no botão os campos preenchidos do formulário será limpo

    // limpar mensagens de erros após adicionar novo paciente
    var mensagensErro = document.querySelector('#mensagens-erro')
    mensagensErro.innerHTML = ''
})

// ============================================

function addPacienteInTable(paciente) {
    // gerar elementos Html da função montaEstruturaHtml
    var pacienteTr = montaEstruturaHtml(paciente)

    // adicionar paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)    

}


// ============================================

// Pegar elementos do form e extrair
function obtemPacienteFormulario(form) {

    // objeto criado afim de agrupar todas as informações de um paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente // retornando valor a si mesmo
}

// ============================================

// montar estrutura Html dinamicamente pelo javascript
function montaEstruturaHtml(paciente) {

    // criar elemento Tr
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    // criar elementos Td        
    // adicionar elementos dentro de um elemento pai
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))
    
    return pacienteTr

}

// ============================================

// montar estrutura td
function montaTd(dado, classe) {
    var td = document.createElement('td') 
    td.textContent = dado // adicionando dado desejado de forma dinâmica
    td.classList.add(classe) // adicionando classe desejada de forma dinâmica

    return td
}

// ============================================

// validação de pacientes
function validaPaciente(paciente) {

    // armazena todas as mensagens de erros dentro deste array
    var erros = []

    // nome
    if(paciente.nome.length == 0) {
        erros.push('O nome não pode ser em branco')
    }

    // peso || com o if simples com uma unica ordem, podemos simplesmente tirar as chaves e deixa-lo em uma unica linha.
    if(!validaPeso(paciente.peso)) {
        erros.push('Peso é inválido!') // push possui a função de empurrar dados para dentro de um array
    }

    if(paciente.peso == 0) {
        erros.push('O peso não pode ser em branco')
    }

    // altura 
    if(!validaAltura(paciente.altura)) {
        erros.push('Altura é inválida!')
    }

    if(paciente.altura == 0) {
        erros.push('A altura não pode ser em branco')
    }

    // gordura
    if(paciente.gordura == 0) {
        erros.push('A gordura não pode ser em branco')
    } 

    return erros
}

// ============================================

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector('#mensagens-erro')

    // ao carregar novas mensagens de erro ele apaga as anteriores
    ul.innerHTML = '' // innerHtml me permite manipular um elemento interno de um elemento

    // para cada item dentro do array faça alguma coisa com ele
    erros.forEach(function(erro) { // forEach substitui o for || para cada elemento dentro da array executamos a mesma função

        var li = document.createElement('li')
        li.textContent = erro

        ul.appendChild(li)

    })
}