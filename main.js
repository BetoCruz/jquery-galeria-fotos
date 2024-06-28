$(document).ready(function(){
    // alert('olá Mundo!')
    // console.log(document.querySelector('header button'))
    // console.log($('#botao-cancelar'))        
    // document.querySelector('header button').addEventListener('click', function(e) {
    // })

    $('header button').click(function() {
        alert('Expandir formulario')
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        // console.log(enderecoDaNovaImagem);
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}"  title="Ver imagem em tamanho real" target="_blank">
                    Ver a imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $(novoItem).fadeIn(3500);

        $('#endereco-imagem-nova').val('')
    })


});
