$(function () {

    //           VALIDACIONES DE APLICACIONES::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


    $("#gApp").click(function () {
        let nombre=$("#nombre");
        let descripcion=$("#descripcion");

        if (nombre.val() == "" && descripcion.val() == "") {
            nombre.addClass("required borderp");
            descripcion.addClass("required borderp");
            validarAppGuardar();
        }else if (nombre.val() == "" || descripcion.val() == "") {
            if(nombre.val() == ""){
                nombre.addClass("required borderp");
                validarAppGuardar2();
            }else if(descripcion.val() == ""){
                descripcion.addClass("required borderp");
                validarAppGuardar3();
            }
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

    function validarAppGuardar2() {
        let nombre=$("#nombre");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#crearapp").validate();

        nombre.change(function() {
            nombre.removeClass("required borderp");
            $("#elemento-error").remove();
        });

    }

    function validarAppGuardar3() {
        let descripcion=$("#descripcion");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#crearapp").validate();


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
        }else if (nombre.val() == "" || descripcion.val() == "") {
            if(nombre.val() == ""){
                nombre.addClass("required borderp");
                validarAppEditar2();
            }else if(descripcion.val() == ""){
                descripcion.addClass("required borderp");
                validarAppEditar3();
            }
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

    function validarAppEditar2() {
        let nombre=$(".nombre");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#editarapp").validate();

        nombre.change(function() {
            nombre.removeClass("required borderp");
            $("#elemento-error").remove();
        });
    }

    function validarAppEditar3() {
        let descripcion=$(".descripcion");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#editarapp").validate();

        descripcion.change(function() {
            descripcion.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }
})