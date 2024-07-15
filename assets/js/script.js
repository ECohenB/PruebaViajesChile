$  (document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('#enviarCorreo').click(function() {
        alert("Gracias por escribirnos");
    });

    $('.card-title').click(function() {
        $(this).siblings('.card-text').toggle();
    });
});

