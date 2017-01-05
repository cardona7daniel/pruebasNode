
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


// API´s - Mostrar datos de las tablas   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    $.getJSON("http://localhost:3000/aplicaciones", function(data){

        let id=0;
        $.each(data, function(i, v){
            id=v.id;
            $(".aplicacion").find("tbody").append("<tr>" +
                "<td>" + v.nombre + "</td>" +
                "<td>" + v.descripcion + "</td>" +
                "<td>" +
                "<a class='eliminar' data-toggle='modal' data-target='#modal'>Eliminar</a>"+
                "<a href='/edit/"+v.id+"'  class='separador'>Editar</a>" +
                "</td>" +
                "</tr>")
        });


        $("#modalApp").append("<div id='modal' class='modal fade' tabindex='-1' role='dialog'>"+
            "<div class='modal-dialog'' role='document'>"+
            "<div class='modal-content'>"+
            "<div class='modal-header'>"+
            "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
            "<h4 class='modal-title'>ADVERTENCIA</h4>"+
            "</div>"+
            "<div class='modal-body'>"+
            "<p>¿Está seguro de que desea eliminar esta aplicación?</p>"+
            "</div>"+
            "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
            "<form class='a' action='/eliminarpaso/"+id+"' method='post'>"+
            "<button type='submit' class='btn btn-danger' >Eliminar</button>"+
            "</form>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>");
    });

// "<a href='/editarescenario/1'  class='separador'>Editar</a><a href='#' class='eliminar' data-toggle='modal' data-target='#modal'>Eliminar</a></td>" +

    $.getJSON("http://localhost:3000/apiescenarios", function(data){
        let id=0;
        $.each(data, function(i, v){
            id=v.id;
            $("table.escenario").find("tbody").append("<tr>" +
                "<td><button class='btn btn-default' id='#' type='submit' data-toggle='tooltip' title='Iniciar'><span class='glyphicon glyphicon-play text-primary align-center'></span></button></td>" +
                "<td>" + v.nombre + "</td>" +
                "<td>" + v.url + "</td>" +
                "<td>" +
                "<a class='eliminar' data-toggle='modal' data-target='#modal'>Eliminar</a>"+
                "<a href='/editarescenario/"+v.id+"' class='separador'>Editar</a>" +
                "</tr>")
        });

        $("#modalEscenario").append("<div id='modal' class='modal fade' tabindex='-1' role='dialog'>"+
            "<div class='modal-dialog'' role='document'>"+
            "<div class='modal-content'>"+
            "<div class='modal-header'>"+
            "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
            "<h4 class='modal-title'>ADVERTENCIA</h4>"+
            "</div>"+
            "<div class='modal-body'>"+
            "<p>¿Está seguro de que desea eliminar este escenario?</p>"+
            "</div>"+
            "<div class='modal-footer'>"+
            "<button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
            "<form class='a' action='/eliminarescenario/"+id+"' method='post'>"+
            "<button type='submit' class='btn btn-danger' >Eliminar</button>"+
            "</form>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>");

        $('[data-toggle="tooltip"]').tooltip();
    });




    $.getJSON("http://localhost:3000/apipasos", function(data){
        let id=0;
        $.each(data, function(i, v){
            id=v.id;
            $("table.pasos").find("tbody").append(
                "<tr> " +
                    "<td class='text-center'>"+v.elemento+"</td>" +
                    "<td class='text-center'>"+v.valor+"</td>" +
                    "<td class='text-center'>"+v.tipo+"</td>" +
                    "<td class='text-center'>" +
                    "<a class='eliminar' data-toggle='modal' data-target='#modal'>Eliminar</a>"+
                    "<a href='/editarpaso/"+v.id+"' class='separador'>Editar</a>" +
                    "</td>" +
                "</tr>")
        });
        $("#modalPasos").append("<div id='modal' class='modal fade' tabindex='-1' role='dialog'>"+
            "<div class='modal-dialog'' role='document'>"+
                "<div class='modal-content'>"+
                    "<div class='modal-header'>"+
                        "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
                        "<h4 class='modal-title'>ADVERTENCIA</h4>"+
                    "</div>"+
                    "<div class='modal-body'>"+
                        "<p>¿Está seguro de que desea eliminar este escenario?</p>"+
                    "</div>"+
                "<div class='modal-footer'>"+
                "<button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
            "<form class='a' action='/eliminar/"+id+"' method='post'>"+
                "<button type='submit' class='btn btn-danger' >Eliminar</button>"+
            "</form>"+
                "</div>"+
                    "</div>"+
                "</div>"+
            "</div>");
    });



    //           SUBIR LOS TH DE LA TABLA DE PASOS
    $(".tr").find("th").css("vertical-align", "top");

    //           VALIDACIONES::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

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

    $("#gEscenarios").click(function () {
        let nombre=$("#nombre");
        let url=$("#url");

        if (nombre.val() == "" && url.val() == "") {
            nombre.addClass("required borderp");
            url.addClass("required borderp");
            validarEscenariosGuardar();
        }

    });

    function validarEscenariosGuardar() {
        let nombre=$("#nombre");
        let url=$("#url");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#crearescenario").validate();

        nombre.change(function() {
            nombre.removeClass("required borderp");
            $("#elemento-error").remove();
        });

        url.change(function() {
            url.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }

    $(".eEscenarios").click(function () {
        let nombre=$(".nombre");
        let url=$(".uri");

        if (nombre.val() == "" && url.val() == "") {
            nombre.addClass("required borderp");
            url.addClass("required borderp");
            validarEscenariosEditar();
        }

    });

    function validarEscenariosEditar() {
        let nombre=$(".nombre");
        let url=$(".uri");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#editarescenario").validate();

        nombre.change(function() {
            nombre.removeClass("required borderp");
            $("#elemento-error").remove();
        });

        url.change(function() {
            url.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }




    $("#gApp").click(function () {
        let nombre=$("#nombre");
        let descripcion=$("#descripcion");

        if (nombre.val() == "" && descripcion.val() == "") {
            nombre.addClass("required borderp");
            descripcion.addClass("required borderp");
            validarAppGuardar();
        }

    });

    function validarAppGuardar() {
        let nombre=$("#nombre");
        let descripcion=$("#descripcion");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#crearapp").validate();

        nombre.change(function() {
            nombre.removeClass("required borderp");
            $("#elemento-error").remove();
        });

        descripcion.change(function() {
            descripcion.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }

    $(".eApp").click(function () {
        let nombre=$(".nombre");
        let descripcion=$(".descripcion");

        if (nombre.val() == "" && descripcion.val() == "") {
            nombre.addClass("required borderp");
            descripcion.addClass("required borderp");
            validarAppEditar();
        }

    });

    function validarAppEditar() {
        let nombre=$(".nombre");
        let descripcion=$(".descripcion");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#editarapp").validate();

        nombre.change(function() {
            nombre.removeClass("required borderp");
            $("#elemento-error").remove();
        });

        descripcion.change(function() {
            descripcion.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }

});
