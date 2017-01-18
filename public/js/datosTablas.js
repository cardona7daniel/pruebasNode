
$(function () {

    // API´s - Mostrar datos de las tablas   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    $.ajax({
        url:"/aplicaciones",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        async: true,
        success: function (data) {
            $.each(data, function(i, v){
                $(".aplicacion").find("tbody").append("<tr>" +
                    "<td>" + v.nombre + " </td>" +
                    "<td><a class='siguiente' href='/escenarios/"+v.nombre+"' >Escenarios</a></td>" +
                    "<td>" + v.descripcion + "</td>" +
                    "<td>" +
                    "<form class='a' action='/eliminarpaso/"+v.ide+"' method='post'>"+
                    "<a class='eliminar' href='javascript:void(0)' onclick='if(confirm(\"Desea eliminar este registro?\")){this.parentNode.submit()}' >Eliminar</a>"+
                    "</form>"+
                    "<a href='/edit/"+v.ide+"'  class='separador'>Editar</a>" +
                    "</td>" +
                    "</tr>");
            });
            // class='eliminar' data-toggle='modal' data-target='#modal'

            // $("#modalApp").append("<div id='modal' class='modal fade' tabindex='-1' role='dialog'>"+
            //     "<div class='modal-dialog'' role='document'>"+
            //     "<div class='modal-content'>"+
            //     "<div class='modal-header'>"+
            //     "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
            //     "<h4 class='modal-title'>ADVERTENCIA</h4>"+
            //     "</div>"+
            //     "<div class='modal-body'>"+
            //     "<p>¿Está seguro de que desea eliminar esta aplicación?</p>"+
            //     "</div>"+
            //     "<div class='modal-footer'>"+
            //     "<button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
            //     "<form class='a' action='/eliminarpaso/"+id+"' method='post'>"+
            //     "<button type='submit' class='btn btn-danger' >Eliminar</button>"+
            //     "</form>"+
            //     "</div>"+
            //     "</div>"+
            //     "</div>"+
            //     "</div>");


        },
        error: function (Error, e, description) {
            console.log(e);
        }
    });

    // $.getJSON("/aplicaciones", function(data){
    // let id=0;
    //     $.each(data, function(i, v){
    //         id=v.ide;
    //         $(".aplicacion").find("tbody").append("<tr>" +
    //             "<td>" + v.nombre + " </td>" +
    //             "<td><a class='siguiente' href='/escenarios/"+v.nombre+"' >Escenarios</a></td>" +
    //             "<td>" + v.descripcion + "</td>" +
    //             "<td>" +
    //             "<a class='eliminar' data-toggle='modal' data-target='#modal'>Eliminar</a>"+
    //             "<a href='/edit/"+v.ide+"'  class='separador'>Editar</a>" +
    //             "</td>" +
    //             "</tr>");
    //     });
    //
    //     $("#modalApp").append("<div id='modal' class='modal fade' tabindex='-1' role='dialog'>"+
    //         "<div class='modal-dialog'' role='document'>"+
    //         "<div class='modal-content'>"+
    //         "<div class='modal-header'>"+
    //         "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
    //         "<h4 class='modal-title'>ADVERTENCIA</h4>"+
    //         "</div>"+
    //         "<div class='modal-body'>"+
    //         "<p>¿Está seguro de que desea eliminar esta aplicación?</p>"+
    //         "</div>"+
    //         "<div class='modal-footer'>"+
    //         "<button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
    //         "<form class='a' action='/eliminarpaso/"+id+"' method='post'>"+
    //         "<button type='submit' class='btn btn-danger' >Eliminar</button>"+
    //         "</form>"+
    //         "</div>"+
    //         "</div>"+
    //         "</div>"+
    //         "</div>");
    //
    //
    // });




    // $.getJSON("/apiescenarios" , function(data){
    //     let id=0;
    //     $.each(data, function(i, v){
    //         id=v.idEsc;
    //     });
    //
    //     $("#modalEscenario").append("<div id='modal' class='modal fade' tabindex='-1' role='dialog'>"+
    //         "<div class='modal-dialog'' role='document'>"+
    //         "<div class='modal-content'>"+
    //         "<div class='modal-header'>"+
    //         "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
    //         "<h4 class='modal-title'>ADVERTENCIA</h4>"+
    //         "</div>"+
    //         "<div class='modal-body'>"+
    //         "<p>¿Está seguro de que desea eliminar este escenario?</p>"+
    //         "</div>"+
    //         "<div class='modal-footer'>"+
    //         "<button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
    //         "<form class='a' action='/eliminarescenario/"+id+"' method='post'>"+
    //         "<button type='submit' class='btn btn-danger' >Eliminar</button>"+
    //         "</form>"+
    //         "</div>"+
    //         "</div>"+
    //         "</div>"+
    //         "</div>");
    //
    //
    //
    //     $('[data-toggle="tooltip"]').tooltip();
    // });
    //
    //
    // $.getJSON("/apipasos", function(data){
    //
    //     $.each(data, function(i, v){
    //         $("#formulario").append(
    //             "<td class='text-center'>" +
    //             "<form action='/eliminar/"+v.id+"' method='post' class='a'>" +
    //             "<a class='eliminar' href='javascript:void(0)' onclick='if(confirm(\"Desea eliminar este registro?\")){this.parentNode.submit()}'>Eliminar</a>"+
    //             "</form>"+
    //             "<a class='separador' href='/editarpaso/"+v.id+"'>Editar</a>"+
    //             "</td>"
    //         )
    //     });
    //
    //
    // });










});