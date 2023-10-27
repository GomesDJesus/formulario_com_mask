$(document).ready(function(){

    

    $('#tel').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00')


    $('form').validate({

        rules: {
            nome: 'required',
            email:{
                required: true,
                email: true,
            },
            tel: "required",
        },
        messages:{
            nome: '<span class="msg-erro">preencha seu nome.</span>',
            email:{
                required: '<span class="msg-erro">preencha seu Email.</span>',
                email: '<span class="msg-erro">preencha seu Email.</span>',
            },
            tel: '<span class="msg-erro">preencha seu telefone.</span>',
        },
        submitHandler: function(form){
            
        let firstName = $('#nome').val().split(' ');

        if(firstName[0].length === 1 || firstName[1].trim() === ''){
            alert('primeiro nome deve conter mais que 1 caractere ou sobrenome esta vazio')
        }else{
            alert(`Obrigado Sr(a) ${firstName[0]} por entrar em contato.`)
             form.submit(); 
        }
        
        },
        invalidHandler: function(event, valida){
            let camposInvalidos = valida.numberOfInvalids();
            if(camposInvalidos){
                alert(`Existem ${camposInvalidos} campos invalidos`)
            }
        }
    })
})