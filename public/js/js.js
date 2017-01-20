
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

    // SUBIR LOS TH DE LA TABLA DE PASOS
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

    function focus() {
        if($("#elemento").val()==""){
            $("#elemento").select();
        }else if($("#valor").val()==""){
            $("#valor").select();
        }
        else{
            $("#elemento").select();
        }

        $("#nombre").select();
        $("#nombreE").select();
    }

    window.onload=ajustar();
    window.onload=focus();

    $(window).resize(function () {
        ajustar();
    });


    var posicionesPasos=[];
    // Mover u ordenar los pasos
    $( "#sort" ).find("tbody").sortable({
        update: function (ev, ui) {
            $("#sort").find("tr").each(function (i, v) {
                $(".inputOrdenar").eq(i).val(i+1);
                posicionesPasos.push(i);

            });
            var datos={};
            var datosArray=[];
            $("#sort").find("tr").each(function (i, v) {
                datos={};
                datos.id=$(".inputId").eq(i).val();
                datos.elemento = $(".getElemento").eq(i).html();
                datos.valor = $(".getValor").eq(i).html();
                datos.tipo = $(".getTipo").eq(i).html();
                datos.orden = $(".inputOrdenar").eq(i).val();
                datosArray.push(datos);
            });
            var formURL = $("#formCambios").attr("action");
            datos=JSON.stringify(datosArray);

            $.ajax({
                method: 'post',
                url: formURL,
                data: {datos},
                dataType: "json"
            }).done(function (data) {
                alert(data);
            }).fail(function (e) {
                console.log(e);
            });

        }
    });

    // $('#actualizar').click(function(ev) {
    //     ev.preventDefault();
    //
    //
    //
    // });

    function asignarOrden() {
        $("#sort").find("tr").each(function (i, v) {
            $(".inputOrdenar").eq(i).val(i+1);
        });
    }

    window.onload=asignarOrden();

    $("#gPasos").click(function () {
        $("#elemento").focus();
    });

/// Disabled button "Ver estado de la prueba"
    if($("#okey").html()==""){
        $( "#verEstado" ).prop( "disabled", true );
    }else if($("#okey").html()!=""){
        $( "#verEstado" ).removeAttr( "disabled");
    }else if($("#error").html()==""){
        $( "#verEstado" ).prop( "disabled", true );
    }else{
        $( "#verEstado" ).removeAttr( "disabled");
    }



});
