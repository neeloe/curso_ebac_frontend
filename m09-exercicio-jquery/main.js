$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        let estaMarcada = false;

        function marcaTarefa(item){
            $(item).find('i').removeClass('fa-regular fa-square');
            $(item).find('i').addClass('fa-solid fa-square-check');
            $(item).find('p').addClass('tarefa-completa');
        }
    
        function desmarcaTarefa(item){
            $(item).find('i').removeClass('fa-solid fa-square-check');
            $(item).find('i').addClass('fa-regular fa-square');
            $(item).find('p').removeClass('tarefa-completa');
        }

        const tarefa = $('#tarefa').val();
        const novoItem = $(`
            <li>
                <i class="fa-regular fa-square"></i>
                <p>${tarefa}</p>
            </li>
            `).on('click', function(){
                if(estaMarcada){
                    desmarcaTarefa(this);
                    estaMarcada = false;
                }else{
                    marcaTarefa(this);
                    estaMarcada = true;
                }        
            });

        $(novoItem).appendTo('ul .container');
        $('#tarefa').val('');
    })

    $('#limpar-tarefas').on('click', function(){
        
        $('li').remove();
    })
  
})