var express=require("express");
var Chance=require("chance");
var chance = new Chance();
var mysql = require('mysql');
var modelEscenarios = require('./routes/escenarios');
var modelPasos = require('./routes/pasos');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebas',
    port: 3306
});

var rutas;
modelEscenarios.getAll(function (error, data) {
    rutas=data;
});
var resultado;
modelPasos.getAll(function (error, data) {
    resultado=data;
});

// var resultado;
// connection.query("SELECT * FROM pasos", function (error, result) {
//             if (error) {
//                 throw error;
//             } else {
//                 resultado=result;
//             }
// });

Feature('Formulario');

Before(function (I) {
    I.amOnPage("http://localhost:3001");
});

Scenario('Crear', function(I) {
    var name=chance.name();
    var age=chance.age();
    var password=chance.string({length: 7});
    var telefono=chance.phone({ formatted: false });



    I.amOnPage(rutas[0].url);
    I.wait(2);


    resultado.forEach(function (element, i, array) {
        switch(array[i].tipo){
            case 'Text':
                switch(array[i].valor){
                    case 'nombre':
                        I.fillField(array[i].elemento, name);
                        break;
                    default:
                        I.fillField(array[i].elemento, array[i].valor);
                        break;
                }
                break;
            case 'Password':
                switch(array[i].valor){
                    case 'pass':
                        I.fillField(array[i].elemento, password);
                        break;
                    default:
                        I.fillField(array[i].elemento, array[i].valor);
                        break;
                }
                break;
            case 'Check_Box':
                I.checkOption(array[i].elemento);
                break;
            case 'Radio':
                I.checkOption(array[i].elemento);
                break;
            case 'Select':
                I.selectOption(array[i].elemento, array[i].valor);
                break;
            case 'Number':
                switch(array[i].valor){
                    case 'edad':
                        I.fillField(array[i].elemento, age.toString());
                        break;
                    case 'telefono':
                        I.fillField(array[i].elemento, telefono.toString());
                        break;
                    default:
                        I.fillField(array[i].elemento, array[i].valor);
                        break;
                }
                break;
            case 'Click':
                if(array[i].elemento != ""){

                    I.click(array[i].elemento);
                }
                else if(array[i].valor != ""){
                    I.click(array[i].valor);
                }
                I.wait(2);
                break;
            case 'See':
                I.see(array[i].valor, array[i].elemento);
                break;
            default:
                console.log("El tipo no ha sido encontrado.");
                break;
        }
    });
});

