var modelApp = require('./aplicaciones');
var modelEscenarios = require('./escenarios');
var modelPasos = require('./pasos');


module.exports = function(app){

    app.get('/', function (req, res) {
        res.render('aplicacion',{
            title : "Automatización"
        });
    });

    app.get('/crearapp', function (req, res) {
        res.render('crearapp', {
            title: "Crear"
        });
    });

    app.post("/guardarapp", function(req,res)
    {
        // res.redirect("/");
        //creamos un objeto con los datos a insertar del usuario
        var formularioData = {
            id : null,
            nombre : req.body.nombre,
            descripcion : req.body.descripcion
        };
        modelApp.insertApp(formularioData,function(error, data)
        {
            //si el usuario se ha insertado correctamente mostramos su info
            if(data)
            {
                res.redirect("/");
            }
            else
            {
                res.json(500,{"msg":"Error"});
            }
        });
    });


///////////_________________________________________________________JSON

    app.get("/aplicaciones", function(req,res){
        modelApp.getAll(function(error, data)
        {
            res.json(200,data);
        });
    });


///::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    app.get("/edit/:id", function(req, res){

        var id = req.params.id;
        //solo actualizamos si la id es un número
        if(!isNaN(id))
        {
            modelApp.getApp(id,function(error, data)
            {
                //si existe la app mostramos el formulario
                if (typeof data !== 'undefined' && data.length > 0)
                {
                    res.render("editarapp",{
                        title : "Editar",
                        info : data
                    });
                }
                //en otro caso mostramos un error
                else
                {
                    res.json(404,{"msg":"notExist"});
                }
            });
        }
        //si la id no es numerica mostramos un error de servidor
        else
        {
            res.json(500,{"msg":"El ID debe ser numerico"});
        }
    });

    app.post("/editarapp", function(req,res)
    {
        //almacenamos los datos del formulario en un objeto
        var userData = {
            id:req.body.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        };

        modelApp.updateApp(userData,function(error, data)
        {
            //si el usuario se ha actualizado correctamente mostramos un mensaje
            if(data)
            {
                res.redirect("/");
            }
            else
            {
                res.json(500, error);
            }
        });
    });

    //_______________________________________________________________________________________________

    //ESCENARIOS::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    app.get('/escenarios', function (req, res) {
        res.render('escenarios', {
            title: "Escenarios"
        });
    });

    app.get('/crearescenario', function (req, res) {
        res.render('crearEscenario', {
            title: "Crear escenario"
        });
    });

    app.post("/guardarescenario", function (req, res) {
        var formularioData = {
            id:null,
            nombre : req.body.nombre,
            url : req.body.url
        };
        modelEscenarios.insertEscenario(formularioData,function(error, data)
        {
            //si el usuario se ha insertado correctamente mostramos su info
            if(data)
            {
                res.redirect("/escenarios");
            }
            else
            {
                res.json(500,{"msg":"Error"});
            }
        });
    });


    app.get("/apiescenarios", function(req,res){
        modelEscenarios.getAll(function(error, data)
        {
            res.json(200,data);
        });
    });

    app.get("/editarescenario/:id", function(req, res){

        var id = req.params.id;

        modelEscenarios.getEscenario(id,function(error, data)
        {
            //si existe la app mostramos el formulario
            if (typeof data !== 'undefined' && data.length > 0)
            {
                res.render("editarEscenario",{
                    title : "Editar Escenario",
                    info : data
                });
            }
            //en otro caso mostramos un error
            else
            {
                res.json(404,{"msg":"notExist"});
            }
        });
    });

    app.post("/editarescenario", function (req, res) {
        //almacenamos los datos del formulario en un objeto
        var userData = {
            id:req.body.id,
            nombre: req.body.nombre,
            url: req.body.url
        };

        modelEscenarios.updateEscenario(userData,function(error, data)
        {
            //si el usuario se ha actualizado correctamente mostramos un mensaje
            if(data)
            {
                res.redirect("/escenarios");
            }
            else
            {
                res.json(500, error);
            }
        });
    });

    app.post("/eliminarescenario/:id", function (req, res) {
        var id = req.params.id;

        modelEscenarios.deleteEscenario(id,function(error, data)
        {
            if(data)
            {
                res.redirect("/escenarios");
            }
            else
            {
                res.json(500,{"msg":"Error"});
            }
        });
    });



    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    app.get('/pasos', function (req, res) {
        res.render('pasos', {
            title: "Pasos"
        });
    });

    app.post("/guardarpasos", function (req, res) {
        var formularioData = {
            id:null,
            elemento : req.body.elemento,
            valor : req.body.valor,
            tipo: req.body.tipo,
            nombre: 'crear'
        };

        modelPasos.insertPasos(formularioData,function(error, data)
        {
            //si el usuario se ha insertado correctamente mostramos su info
            if(data)
            {
                res.redirect("/pasos");
            }
            else
            {
                res.json(500,{"msg":"Error"});
            }
        });
    });

    app.post("/eliminar/:id", function (req, res) {
        var id = req.params.id;

        modelPasos.deletePasos(id,function(error, data)
        {
            if(data)
            {
                res.redirect("/pasos");
            }
            else
            {
                res.json(500,{"msg":"Error"});
            }
        });
    });


    app.get("/apipasos", function(req,res){
        modelPasos.getAll(function(error, data)
        {
            res.json(200,data);
        });
    });


    // app.get('/eliminar', function (req, res) {
    //
    //     var nombre = req.query.nombre || '';
    //
    //     res.send('<html><body>'
    //         + '<h1>dddd</h1>'
    //
    //         + '<form method="get" action="/saludo">'
    //         + '<label for="nombre">¿Cómo te llamas?</label>'
    //         + '<input type="text" name="nombre" id="nombre">'
    //         + '<input type="submit" value="Enviar"/>'
    //         + '</form>'
    //         + '</body></html>');
    //
    // });


};