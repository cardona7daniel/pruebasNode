var express=require("express");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebas',
    port: 3306
});


var modelPasos={};

modelPasos.getAll=function (callback) {
    if (connection)
    {
        connection.query('SELECT * FROM pasos', function(error, result) {
            if(error)
            {
                throw error;
            }
            else
            {
                console.log(result);
                callback(null, result);
            }
        });
    }
};

modelPasos.getPasos = function(id,callback)
{
    if (connection)
    {

        connection.query('SELECT * FROM pasos WHERE id = ?', [id], function(error, result)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                console.log(result);
                callback(null, result);
            }
        });
    }
};

modelPasos.insertPasos = function(data,callback) {
    if (connection) {
        connection.query('INSERT INTO pasos SET ?', data, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                //devolvemos la última id insertada
                console.log(result);
                callback(null, result);
            }
        });

    }
};


modelPasos.updatePasos = function(data, callback)
{
    //console.log(userData); return;
    if(connection)
    {
        connection.query("UPDATE pasos SET elemento=?, valor=?, tipo=?, nombre=? WHERE  id=? ", [data.elemento, data.valor, data.tipo, data.nombre, data.id],function(error, result){
                if(error){
                    throw error;
                }else{
                    console.log(result);
                    callback(null, {"msg": "Success"});
                }
            }
        );
    }
};

modelPasos.deletePasos = function(id, callback)
{
    if(connection)
    {

        connection.query('SELECT * FROM pasos WHERE id = ?', [id], function(err, row)
        {
            //si existe la id de la app a eliminar
            if(row)
            {
                connection.query("DELETE FROM pasos WHERE id=? ", [id],function(error, result){
                        if(error){
                            throw error;
                        }else{
                            console.log(result);
                            callback(null, result);
                        }
                    }
                );
            }
            else
            {
                callback(null,{"msg":"notExist"});
            }

        });
    }
};


module.exports = modelPasos;
