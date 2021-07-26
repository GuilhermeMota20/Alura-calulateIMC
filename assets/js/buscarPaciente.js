// Buscar dados de outros serviços/sites já existentes || Requisição

// buscar botão
var btnAddSearch = document.querySelector('#buscar-paciente')

btnAddSearch.addEventListener('click', function() {

    var xhr = new XMLHttpRequest() // è um objeto do JS responsável por fazer requisições através do http

    // configura-lo || 1° parâmetro: tipo de requisição (post, get) || 2° parâmetro: de que endereço deseja fazer a requisição (cole a url)
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function() { // load: quando estiver carregado

        var errorAjax = document.querySelector('#erro-ajax')

        // se status(codigos de erros ou acertos) for igual a 200
        // então podemos carregar os dados e adicionálos a tabela
        if(xhr.status == 200) {
            errorAjax.classList.add('invisible')
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta) // vai ler a string buscada e me responder com um objeto javascript
    
            // para cada paciente, chame um paciente de cada vez para a função  addPacienteInTable
            pacientes.forEach(function (paciente) {
                addPacienteInTable(paciente)
                
            });
        } else { // se não for igual, mostraremos algum erro no console
            console.log(xhr.status)
            console.log(xhr.responseText)

            // e para o usuário caso queira
            errorAjax.classList.remove('invisible')

        }
    });

    xhr.send() // enviando requisição

})