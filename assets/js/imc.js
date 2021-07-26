var pacientes = document.querySelectorAll('.paciente')

for(var i = 0; i < pacientes.length; i++) {

    // passar um  item da lista de pacientes para a variavel PACIENTE
    var paciente = pacientes[i]

    // pegar peso
    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent // capturar conteudo da tag

    // pegar altura
    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent

    // pegar imc
    var tdImc = paciente.querySelector('.info-imc')

    // condicionais de validação, se a altura e peso forem menor que 0 e maior que 1000 e 3.00 não devemos prosseguir com o calculo de imc, e adicionar uma clsse a eles que muda seu visual
    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(altura)

    if(!pesoValido) { // quando peso não for válido entra na condição
        pesoValido = false
        tdImc.textContent = 'Peso inválido!'

        paciente.classList.add('campo-invalido')

    }

    if(!alturaValida) {
        alturaValida = false
        tdImc.textContent = 'Altura inválido!'

        paciente.classList.add('campo-invalido')

    }

    // calcular IMC
    if(pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

// ============================================

// validação de peso
function validaPeso(peso) {
    if(peso >= 0 && peso <= 1000) {
        return true

    } else {
        return false
    }
}

// ============================================

// validação de altura
function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true

    } else {
        return false
    }
}

// ============================================

// passando calculo de imc para uma função
function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2) // imprimir na tela || toFixed() nos permite selecionar a quantidade de casas decimais a serem visiveis 
}

