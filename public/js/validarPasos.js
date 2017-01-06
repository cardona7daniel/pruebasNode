$(function () {

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

    function validarPasosGuardar3(){
        let elemento=$("#elemento");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#guardarPasos").validate();

        elemento.change(function() {
            elemento.removeClass("required borderp");
            $("#elemento-error").remove();
        });
    }

    function validarPasosGuardar4(){
        let valor=$("#valor");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#guardarPasos").validate();

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

    function validarPasosEditar3(){
        let elemento=$(".elemento");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#editarPasos").validate();

        elemento.change(function() {
            elemento.removeClass("required borderp");
            $("#elemento-error").remove();
        });
    }

    function validarPasosEditar4(){
        let valor=$(".valor");
        jQuery.validator.messages.required= 'Este campo es obligatorio.';
        $("#editarPasos").validate();

        valor.change(function() {
            valor.removeClass("required borderp");
            $("#valor-error").remove();
        });
    }


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
            }else if (elemento.val() == "" || valor.val() == "") {
                if(elemento.val() == ""){
                    elemento.addClass("required borderp");
                    validarPasosGuardar3();
                }
                else if(valor.val() == ""){
                    valor.addClass("required borderp");
                    validarPasosGuardar4();
                }
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
            }else if (elemento.val() == "" || valor.val() == "") {
                if(elemento.val() == ""){
                    elemento.addClass("required borderp");
                    validarPasosEditar3();
                }
                else if(valor.val() == ""){
                    valor.addClass("required borderp");
                    validarPasosEditar4();
                }
            }
        }
    });

});