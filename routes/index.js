var express=require('express');
var exec = require('child_process');
var modelApp = require('./aplicaciones');
var modelEscenarios = require('./escenarios');
var modelPasos = require('./pasos');





var name="";

module.exports=function (app) {


    app.get('/', function (req, res) {

        res.render('aplicacion', {
            title: "Automatización"
        });
    });


    app.get('/crearapp', function (req, res) {
        res.render('crearapp', {
            title: "Crear",
            error: "Los campos no pueden estar vacíos"
        });
    });

    app.post("/guardarapp", function (req, res) {
        //creamos un objeto con los datos a insertar del usuario
        var formularioData = {
            ide: null,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        };

        if (req.body.nombre != null || req.body.nombre.length != 0 && req.body.descripcion != null || req.body.descripcion.length != 0) {
            modelApp.insertApp(formularioData, function (error, data) {
                //si el usuario se ha insertado correctamente mostramos su info
                if (data) {
                    res.redirect("/");
                }
                else {
                    res.json(500, {"msg": "Error"});
                }
            });
        }
        else {
            res.redirect("/")
        }
    });


///////////_________________________________________________________JSON


    app.get("/aplicaciones", function (req, res) {
        modelApp.getAll(function (error, data) {
            res.status(200).json(data)
        });
    });

///::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    app.get("/edit/:id", function (req, res) {

        var id = req.params.id;

        modelApp.getApp(id, function (error, data) {
            //si existe la app mostramos el formulario
            if (typeof data !== 'undefined' && data.length > 0) {
                res.render("editarapp", {
                    title: "Editar",
                    info: data
                });
            }
            //en otro caso mostramos un error
            else {
                res.json(404, {"msg": "notExist"});
            }
        });

    });

    app.post("/editarapp", function (req, res) {
        //almacenamos los datos del formulario en un objeto
        var userData = {
            id: req.body.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        };

        if (req.body.nombre != null || req.body.nombre.length != 0 && req.body.descripcion != null || req.body.descripcion.length != 0) {

            modelApp.updateApp(userData, function (error, data) {
                //si el usuario se ha actualizado correctamente mostramos un mensaje
                if (data) {
                    res.redirect("/");
                }
                else {
                    res.json(500, error);
                }
            });
        }
        else {
            res.redirect("/");
        }
    });

    app.post("/eliminarpaso/:id", function (req, res) {
        var id = req.params.id;

        modelApp.deleteApp(id, function (error, data) {
            if (data) {
                res.redirect("/");
            }
            else {
                res.json(500, {"msg": "Error"});
            }
        });
    });

//_______________________________________________________________________________________________

//ESCENARIOS::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    var datosEscenario;
    app.get("/escenarios/:name", function (req, res) {

        name = req.params.name;

        modelEscenarios.getEscenariosApp(name, function (error, data) {
            if (typeof data !== 'undefined' && data.length > 0) {
                res.render("escenarios", {
                    title: "Escenarios",
                    info: data,
                    ok: MessageOk,
                    error: MessageError
                });
                datosEscenario = data;
            }
            else if (typeof data !== 'undefined' && data.length == 0) {
                modelEscenarios.getEscenariosApp2(name, function (error, data2) {
                    res.render("escenarios", {
                        title: "Escenarios",
                        info: data2,
                        ok: MessageOk,
                        error: MessageError
                    });
                    console.log(data2);
                    datosEscenario = data2;
                });
            }
            else {
                res.json(404, {"msg": "notExist"});
            }

        });
    });

    app.get('/crearescenario', function (req, res) {
        res.render('crearEscenario', {
            title: "Crear escenario",
            info: datosEscenario,
            ok: MessageOk,
            error: MessageError
        });
    });

    app.post("/guardarescenario", function (req, res) {
        var formularioData = {
            idEsc: null,
            nombre: req.body.nombre,
            url: req.body.url,
            idApp: req.body.idApp
        };

        if (req.body.nombre != null || req.body.nombre.length != 0 && req.body.url != null || req.body.url.length != 0) {

            modelEscenarios.insertEscenario(formularioData, function (error, data) {
                //si el usuario se ha insertado correctamente mostramos su info
                if (data) {
                    res.redirect('/escenarios/' + name, {
                        ok: MessageOk,
                        error: MessageError
                    });
                }
                else {
                    res.json(500, {"msg": "Error"});
                }
            });
        }
        else {
            res.redirect('/escenarios/' + name, {
                ok: MessageOk,
                error: MessageError
            });
        }
    });

    var MessageOk = "";
    var MessageError = "";
    app.get("/codecept/:name", function (req, res) {
        var name2 = req.params.name;
        exec.exec('c: && cd C:\\Users\\ldcardona\\Desktop\\node && codeceptjs run . other_test.js "nombreEsc=' + name2 + '" ',
            function (error, stdout, stderr) {
                if (error) {
                    console.error(error);
                    throw error;
                }
                console.log('stdout ', stdout);
                MessageOk = stdout;
                console.log('stderr ', stderr);
                MessageError = stderr;
            });
        res.redirect('/escenarios/' + name);
    });


    app.get("/apiescenarios", function (req, res) {
        modelEscenarios.getAll(function (error, data) {
            res.json(200, data);
        });
    });


    app.get("/editarescenario/:id", function (req, res) {

        var id = req.params.id;

        modelEscenarios.getEscenario(id, function (error, data) {
            //si existe la app mostramos el formulario
            if (typeof data !== 'undefined' && data.length > 0) {
                res.render("editarEscenario", {
                    title: "Editar Escenario",
                    info: data
                });
            }
            //en otro caso mostramos un error
            else {
                res.json(404, {"msg": "notExist"});
            }
        });
    });

    app.post("/editarescenario", function (req, res) {
        //almacenamos los datos del formulario en un objeto
        var userData = {
            id: req.body.id,
            nombre: req.body.nombre,
            url: req.body.url
        };

        if (req.body.nombre != null || req.body.nombre.length != 0 && req.body.url != null || req.body.url.length != 0) {

            modelEscenarios.updateEscenario(userData, function (error, data) {
                //si el usuario se ha actualizado correctamente mostramos un mensaje
                if (data) {
                    res.redirect("/escenarios/" + name);
                }
                else {
                    res.json(500, error);
                }
            });
        }
        else {
            res.redirect("/escenarios/" + name);
        }
    });

    app.post("/eliminarescenario/:id", function (req, res) {
        var id = req.params.id;

        modelEscenarios.deleteEscenario(id, function (error, data) {
            if (data) {
                res.redirect("/escenarios/" + name);
            }
            else {
                res.json(500, {"msg": "Error"});
            }
        });
    });

//     //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// //                                                              PASOS

    var datosApp;
    app.get("/pasos/:name", function (req, res) {

        name = req.params.name;

        modelPasos.getPasosEscenarios(name, function (error, data) {
            if (typeof data !== 'undefined' && data.length > 0) {
                datosApp = data;
                res.render("pasos", {
                    title: "Pasos",
                    info: data
                });
            }
            else if (typeof data !== 'undefined' && data.length == 0) {
                modelPasos.getPasosEscenarios2(name, function (error, data2) {
                    datosApp = data2;
                    res.render("pasos", {
                        title: "Pasos",
                        info: data2
                    });
                });
            }
            else {
                res.json(404, {"msg": "notExist"});
            }
        });
    });

    app.post("/guardarpasos", function (req, res) {
        console.log(datosApp);
        var formularioData = {
            id: null,
            elemento: req.body.elemento,
            valor: req.body.valor,
            tipo: req.body.tipo,
            idEscenario: req.body.idEscenario
        };

        if (req.body.tipo == "Click" || req.body.tipo == "See") {

            if (req.body.elemento != "" || req.body.valor != "") {

                modelPasos.insertPasos(formularioData, function (error, data) {
                    //si el usuario se ha insertado correctamente mostramos su info
                    if (data) {
                        res.redirect("/pasos/" + name);
                    }
                    else {
                        res.json(500, {"msg": "Error"});
                    }
                });
            }
            else {
                res.redirect("/pasos/" + name);
            }

        }
        else if (req.body.tipo != "Click" && req.body.tipo != "See") {
            if (req.body.elemento != "" && req.body.valor != "") {
                modelPasos.insertPasos(formularioData, function (error, data) {
                    //si el usuario se ha insertado correctamente mostramos su info
                    if (data) {
                        res.redirect("/pasos/" + name);
                    }
                    else {
                        res.json(500, {"msg": "Error"});
                    }
                });
            }
            else {
                res.redirect("/pasos/" + name);
            }
        }
        else {
            res.redirect("/pasos/" + name);
        }


    });

    app.post("/eliminar/:id", function (req, res) {
        var id = req.params.id;

        modelPasos.deletePasos(id, function (error, data) {
            if (data) {
                res.redirect("/pasos/" + name);
            }
            else {
                res.json(500, {"msg": "Error"});
            }
        });
    });


    app.get("/apipasos", function (req, res) {
        modelPasos.getAll(function (error, data) {
            res.json(200, data);
        });
    });

    app.get("/editarpaso/:id", function (req, res) {

        var id = req.params.id;

        modelPasos.getPasos(id, function (error, data) {
            //si existe la app mostramos el formulario
            if (typeof data !== 'undefined' && data.length > 0) {
                res.render("editarPaso", {
                    title: "Editar Paso",
                    info: data
                });
            }
            //en otro caso mostramos un error
            else {
                res.json(404, {"msg": "notExist"});
            }
        });
    });

    app.post("/editarpaso", function (req, res) {
        //almacenamos los datos del formulario en un objeto
        var userData = {
            id: req.body.id,
            elemento: req.body.elemento,
            valor: req.body.valor,
            tipo: req.body.tipo


        };

        if (req.body.tipo == "Click" || req.body.tipo == "See") {

            if (req.body.elemento != "" || req.body.valor != "") {

                modelPasos.updatePasos(userData, function (error, data) {
                    //si el usuario se ha actualizado correctamente mostramos un mensaje
                    if (data) {
                        res.redirect("/pasos/" + name);
                    }
                    else {
                        res.json(500, error);
                    }
                });

            }
            else {
                res.redirect("/pasos/" + name);
            }
        }
        else if (req.body.tipo != "Click" && req.body.tipo != "See") {
            if (req.body.elemento != "" && req.body.valor != "") {
                modelPasos.updatePasos(userData, function (error, data) {
                    //si el usuario se ha insertado correctamente mostramos su info
                    if (data) {
                        res.redirect("/pasos/" + name);
                    }
                    else {
                        res.json(500, {"msg": "Error"});
                    }
                });
            }
            else {
                res.redirect("/pasos/" + name);
            }
        }
        else {
            res.redirect("/pasos/" + name);
        }
    });
};