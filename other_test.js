var Chance=require("chance");
var chance = new Chance();
var modelPasos = require('./routes/pasos');


var nombre = '';
var regEx = /nombreEsc=.+/ig;
process.argv.forEach(function (str) {
   if(regEx.exec(str)) {
       nombre = str.split('=')[1];
   }
});

var resultado;
modelPasos.getPasosEscenariosCodecept(nombre, function (error, data) {
    resultado=data;
});

Feature('');

Before(function (I) {
    modelPasos.getPasosEscenariosCodecept(nombre, function (error, data) {
        I.amOnPage(data[0].url);
        console.log('Scenario: ' + data[0].nombre);
    });
});

Scenario('', function(I) {
    var random = {
        name: chance.name(),
        age: chance.age(),
        password: chance.string({length: 7}),
        telefono: chance.phone({formatted: false}),
        date: chance.date({string: true, american: false}),
        email: chance.email(),
        direccion: chance.address(),
        ciudad: chance.city(),
        year: chance.year()
    };

    I.wait(2);

    resultado.forEach(function (element, i, array) {
        switch(array[i].tipo){
            case 'Text':
                switch(array[i].valor){
                    case 'nombre':
                        I.fillField(array[i].elemento, random.name);
                        break;
                    case 'direccion':
                        I.fillField(array[i].elemento, random.direccion);
                        break;
                    case 'ciudad':
                        I.fillField(array[i].elemento, random.ciudad);
                        break;
                    default:
                        I.fillField(array[i].elemento, array[i].valor);
                        break;
                }
                break;
            case 'Password':
                switch(array[i].valor){
                    case 'pass':
                        I.fillField(array[i].elemento, random.password);
                        break;
                    default:
                        I.fillField(array[i].elemento, array[i].valor);
                        break;
                }
                break;
            case 'Check_Box':
                I.checkOption(array[i].elemento);
                break;
            case 'Date':
                switch(array[i].valor){
                    case 'date':
                        I.fillField(array[i].elemento, random.date);
                        break;
                    default:
                        I.fillField(array[i].elemento, array[i].valor);
                        break;
                }
                break;
            case 'Email':
                switch(array[i].valor){
                    case 'email':
                        I.fillField(array[i].elemento, random.email);
                        break;
                    default:
                        I.fillField(array[i].elemento, array[i].valor);
                        break;
                }
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
                        I.fillField(array[i].elemento, random.age.toString());
                        break;
                    case 'telefono':
                        I.fillField(array[i].elemento, random.telefono.toString());
                        break;
                    case 'year':
                        I.fillField(array[i].elemento, random.year);
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

    modelPasos.connectionClose();
});