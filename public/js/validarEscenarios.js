
$(function () {
    $("#gEscenarios").click(function () {
        var nombre=$("#nombre");
        var url=$("#url");

        if (nombre.val() == "" && url.val() == "") {
            nombre.addClass("required borderp");
            url.addClass("required borderp");
            validarEscenariosGuardar();
        }else if (nombre.val() == "" || url.val() == "") {
            if(nombre.val() == ""){
                nombre.addClass("required borderp");
                validarEscenariosGuardar2();
            }else if(url.val() == ""){
                url.addClass("required borderp");
                validarEscenariosGuardar3();
            }
        }

    });

    function validarEscenariosGuardar() {
        var nombre=$("#nombre");
        var url=$("#url");
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

    function validarEscenariosGuardar2() {
        var nombre=$("#nombre");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#crearescenario").validate();

        nombre.change(function() {
            nombre.removeClass("required borderp");
            $("#elemento-error").remove();
        });
    }

    function validarEscenariosGuardar3() {
        var url=$("#url");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#crearescenario").validate();

        url.change(function() {
            url.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }

    $(".eEscenarios").click(function () {
        var nombre=$(".nombre");
        var url=$(".uri");

        if (nombre.val() == "" && url.val() == "") {
            nombre.addClass("required borderp");
            url.addClass("required borderp");
            validarEscenariosEditar();
        }else if (nombre.val() == "" || url.val() == "") {
            if(nombre.val() == ""){
                nombre.addClass("required borderp");
                validarEscenariosEditar2();
            }else if(url.val() == ""){
                url.addClass("required borderp");
                validarEscenariosEditar3();
            }
        }

    });

    function validarEscenariosEditar() {
        var nombre=$(".nombre");
        var url=$(".uri");
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

    function validarEscenariosEditar2() {
        var nombre=$(".nombre");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#editarescenario").validate();

        nombre.change(function() {
            nombre.removeClass("required borderp");
            $("#elemento-error").remove();
        });
    }

    function validarEscenariosEditar3() {
        var url=$(".url");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#editarescenario").validate();

        url.change(function() {
            url.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }
})
