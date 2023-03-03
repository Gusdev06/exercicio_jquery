$(document).ready(function(e){
    $('.cadastra').on('click', function(){
        const nameTarefa = $('#adc-tarefa').val()
        const li = document.createElement('li')
        li.innerHTML = `${nameTarefa}`
        $('ul').append(li)
        $('#adc-tarefa').val('')
        $(li).click(function(){
            $(li).toggleClass('riscar')
        })
    })
})
