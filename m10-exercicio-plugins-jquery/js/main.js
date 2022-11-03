$(document).ready(function(){
    
    // Cria novo validador para o telefone
    $.validator.addMethod("validateTelefone", function (telefone) {

        let pattern = '';

        if ($('#celular').is(':checked')){
            pattern = /\(\d{2}\)\s[9]{1}\d{4}-\d{4}$/;
        }else if ($('#fixo').is(':checked')){
            pattern = /\(\d{2}\)\s\d{4}-\d{4}$/;
        }

        return pattern.test(telefone);
    
        },);

        
    // adicionando máscaras aos campos input
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#celular').click(function(){
        $('#telefone').mask('(00) 00000-0000', {
            placeholder: '(00) 00000-0000'
        });
        $('#telefone').val('');
        $('#telefone').focus();
    }) 
    
    $('#fixo').click(function(){
        $('#telefone').mask('(00) 0000-0000', {
            placeholder: '(00) 0000-0000'
        });
        $('#telefone').val('');
        $('#telefone').focus();
    }) 

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00.000-000', {
        placeholder: '__.___-___'
    })


    $('form').validate({
        rules: {
            nome: {
                required: true,
                minWords: 2
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                validateTelefone: true
            },
            cpf: {
                required: true,
                cpfBR: true
            }, 
            endereco: {
                required: true
            },
            cep: {
                required: true,
                postalcodeBR: true
            }
        }, 
        messages: {
            nome: {
                required: 'Por favor, insira o seu nome',
                minWords: 'Por favor insira o nome completo'
            },
            email: { 
                required:'Por favor, insira o seu e-mail',
                email: 'Por favor, insira um e-mail válido'
                    },
            telefone: {
                required: 'Por favor, insira o número de telefone',
                validateTelefone: 'Telefone inválido'
                      },
            cpf: {
                required: 'Por favor, insira o número do seu Cpf',
                cpfBR: 'O número do Cpf é inválido'
                },
            endereco: 'Por favor, insira o seu endereço',
            cep: { 
                required: 'Por favor, insira o Cep',
                postalcodeBR: 'O número do Cep é inválido'
            }
        },
        submitHandler: function(form){
            // form.resetForm();
            // Enviar formulário
            mensagemDeEnvio('msg-sucesso');
            resetForm();
        }, 
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            mensagemDeEnvio('msg-erro', camposIncorretos);
        }
    })

    function resetForm(){
        $('#nome').val('');
        $('#email').val('');

        $('#telefone').val('');
        $('#telefone').mask('(00) 00000-0000', {
            placeholder: '(00) 00000-0000'});
        $('#celular').prop('checked', true)

        $('#cpf').val('');
        $('#endereco').val('');
        $('#cep').val('');
    }

    function mensagemDeEnvio(classeMensagem, camposIncorretos){

        let mensagem;

        if (camposIncorretos){
            mensagem = camposIncorretos == 1 ? `Existe ${camposIncorretos} campo incorreto` : `Existem ${camposIncorretos} campos incorretos`;
        } else {
            mensagem = 'Cadastro efetuado com sucesso!';
        }
        
        $('#msg-envio').attr('class', classeMensagem)
        $('#msg-envio').text(mensagem)
        $('#msg-envio').css('display', 'block')
        // $('#msg-envio').slideDown();
    }

  
})