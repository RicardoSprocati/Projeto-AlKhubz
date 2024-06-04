$(document).ready(function(){
    $('#fone').mask('(00) 00000-0000', {
        placeholder: '+55 (00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'seu nome,por favor!',
            email: 'seu E-mail, por favor!',
            mensagem: 'sua avaliação, por favor!'
        },
        invalidHandler: function(evento,validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
})