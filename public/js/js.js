
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




    $.getJSON("http://localhost:3000/aplicaciones", function(data){

        $.each(data, function(i, v){
            $(".aplicacion").find("tbody").append("<tr>" +
                "<td>" + v.nombre + "</td>" +
                "<td>" + v.descripcion + "</td>" +
                "<td>" +
                "<form class='a' action='/eliminarpaso/"+v.id+"' method='post'>" +
                "<a class='eliminar' href='javascript:void(0);' onclick='if(confirm(\"Esta seguro de que quiere eliminar esta aplicación?\")){this.parentNode.submit();}'>Eliminar</a>"+
                "</form>"+
                "<a href='/edit/"+v.id+"'  class='separador'>Editar</a>" +
                "</td>" +
                "</tr>")
        });
    });



    $.getJSON("http://localhost:3000/apiescenarios", function(data){
        $.each(data, function(i, v){
            $("table.escenario").find("tbody").append("<tr>" +
                "<td><button class='btn btn-default' id='#' type='submit' data-toggle='tooltip' title='Iniciar'><span class='glyphicon glyphicon-play text-primary align-center'></span></button></td>" +
                "<td>" + v.nombre + "</td>" +
                "<td>" + v.url + "</td>" +
                "<td>" +
                "<form class='a' action='/eliminarescenario/"+v.id+"' method='post'>" +
                "<a class='eliminar' href='javascript:void(0);' onclick='if(confirm(\"Esta seguro de que quiere eliminar este escenario\")){this.parentNode.submit();}'>Eliminar</a>"+
                "</form>"+
                "<a href='/editarescenario/"+v.id+"' class='separador'>Editar</a>" +
                "</tr>")
        });

        $('[data-toggle="tooltip"]').tooltip();
    });
// "<a href='/editarescenario/1'  class='separador'>Editar</a><a href='#' class='eliminar' data-toggle='modal' data-target='#modal'>Eliminar</a></td>" +


    var idPaso;
    $.getJSON("http://localhost:3000/apipasos", function(data){

        $.each(data, function(i, v){
            $("table.pasos").find("tbody").append(
                "<tr> " +
                    "<td class='text-center'>"+v.elemento+"</td>" +
                    "<td class='text-center'>"+v.valor+"</td>" +
                    "<td class='text-center'>"+v.tipo+"</td>" +
                    "<td class='text-center'>" +
                    "<form class='a' action='/eliminar/"+v.id+"' method='post'>" +
                        "<a class='eliminar' href='javascript:void(0);' onclick='if(confirm(\"Esta seguro de que quiere eliminar este paso\")){this.parentNode.submit();}'>Eliminar</a>"+
                    "</form>"+
                    "<a href='/editarpaso/"+v.id+"' class='separador'>Editar</a>" +
                    "</td>" +
                "</tr>")
        });
    });

    $(".tr").find("th").css("vertical-align", "top");



    function validarPasosGuardar() {
        let valor=$("#valor");
        let elemento=$("#elemento");

        jQuery.validator.messages.required= 'Al menos un campo es obligatorio.';
        $("#guardarPasos").validate();

        elemento.change(function() {
            valor.removeClass("required borderp");
            elemento.removeClass("required borderp");
            $("#valor-error").remove();
        });

        valor.change(function() {
            valor.removeClass("required borderp");
            elemento.removeClass("required borderp");
            $("#elemento-error").remove();
        });
    }

    function validarPasosGuardar2(){
        let valor=$("#valor");
        let elemento=$("#elemento");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#guardarPasos").validate();

        elemento.change(function() {
            elemento.removeClass("required borderp");
            $("#elemento-error").remove();
        });

        valor.change(function() {
            valor.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }


    function validarPasosEditar() {
        let valor=$(".valor");
        let elemento=$(".elemento");

        jQuery.validator.messages.required= 'Al menos un campo es obligatorio.';
        $("#editarPasos").validate();

        elemento.change(function() {
            valor.removeClass("required borderp");
            elemento.removeClass("required borderp");
            $("#valor-error").remove();
        });

        valor.change(function() {
            valor.removeClass("required borderp");
            elemento.removeClass("required borderp");
            $("#elemento-error").remove();
        });
    }

    function validarPasosEditar2(){
        let valor=$(".valor");
        let elemento=$(".elemento");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#editarPasos").validate();

        elemento.change(function() {
            elemento.removeClass("required borderp");
            $("#elemento-error").remove();
        });

        valor.change(function() {
            valor.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }


    function validarFormulario(){
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        // jQuery.validator.messages.number = 'Esta campo debe ser num&eacute;rico.';
        // jQuery.validator.messages.email = 'La direcci&oacute;n de correo es incorrecta.';
        $("#crearapp").validate();
        $("#editarapp").validate();
        $("#crearescenario").validate();
        $("#editarescenario").validate();
    }

    $(".guardarapp").click(function () {
        validarFormulario();
    });



    $("#gPasos").click(function () {
        let tipo=$("#tipo");
        let valor=$("#valor");
        let elemento=$("#elemento");

        if (tipo.val() == "Click" || tipo.val() == "See") {
            if (elemento.val() == "" && valor.val() == "") {
                elemento.addClass("required borderp");
                valor.addClass("required borderp");
                validarPasosGuardar();
            }
        }else if(tipo.val() != "Click" || tipo.val() != "See"){
            if (elemento.val() == "" && valor.val() == "") {
                elemento.addClass("required borderp");
                valor.addClass("required borderp");
                validarPasosGuardar2();
            }
        }
    });

    $(".ePasos").click(function () {
        let tipo=$(".tipo");
        let valor=$(".valor");
        let elemento=$(".elemento");

        if (tipo.val() == "Click" || tipo.val() == "See") {
            if (elemento.val() == "" && valor.val() == "") {
                elemento.addClass("required borderp");
                valor.addClass("required borderp");
                validarPasosEditar();
            }
        }else if(tipo.val() != "Click" || tipo.val() != "See"){
            if (elemento.val() == "" && valor.val() == "") {
                elemento.addClass("required borderp");
                valor.addClass("required borderp");
                validarPasosEditar2();
            }
        }
    });
















});
