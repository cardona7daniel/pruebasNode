
$(function () {


    // function quitar() {
    //     $("#alerta").fadeOut('slow');
    // }
    //
    // setTimeout(quitar, 3000);
    //
    // $(".guardar").click(function () {
    //     $("#alert").show();
    // });



    $('[data-toggle="tooltip"]').tooltip();

    //           SUBIR LOS TH DE LA TABLA DE PASOS
    $(".tr").find("th").css("vertical-align", "top");

    if($(".nombreEscenario").html()==""){
        $(".fila").remove();
    }
    if($(".tipoPaso").html()==""){
        $(".filaPaso").remove();
    }

    function ajustar(){
        var elemento=$(".anchoElemento").width();
        var valor=$(".anchoValor").width();
        var tipo=$(".anchoTipo").width();
        var guardar=$(".anchoGuardar").width();

        $(".getElemento").width(elemento+"px");
        $(".getValor").width(valor+"px");
        $(".getTipo").width(tipo+"px");
        $(".getGuardar").width(guardar+"px");
    }

    window.onload=ajustar();

    $(window).resize(function () {
        ajustar();
    })

});
