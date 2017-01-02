
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    // function quitar() {
    //     $("#alerta").fadeOut('slow');
    // }
    //
    // setTimeout(quitar, 3000);
    //
    // $(".guardar").click(function () {
    //     $("#alert").show();
    // });


    $.getJSON("http://localhost:3000/api", function(data){
        console.log("Result"+ result);
        $.each(data, function(i, v){
            $(".aplicacion").find("tbody").append("<tr>" +
                "<td>" + v.nombre + "</td>" +
                "<td>" + v.descripcion + "</td>" +
                "<td><a href='/edit/1'>Editar</a></td>" +
                "</tr>")
        });
    });
});
