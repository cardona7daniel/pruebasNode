
$(function () {

    // API´s - Mostrar datos de las tablas   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    let idApp=0;
    $.getJSON("http://localhost:3000/aplicaciones", function(data){
        let id=0;
        $.each(data, function(i, v){
            id=v.id;
            $(".aplicacion").find("tbody").append("<tr>" +
                "<td>" + v.nombre + " </td>" +
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
                "<td><form action='/mochawesome.html' target='_blank' method='get'><button class='btn btn-default' id='#' type='submit' data-toggle='tooltip' title='Iniciar'><span class='glyphicon glyphicon-play text-primary align-center'></span></button></form></td>" +
                "<td>" + v.nombre + " </td>" +
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
            "<p>¿Está seguro de que desea eliminar este paso?</p>"+
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

});