var express=require("express");
var mysql = require('mysql');
var sync = require('synchronize');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebas',
    port: 3306
});


var modelEscenarios={};

modelEscenarios.getAll=function (callback) {
    if (connection)
    {
        connection.query('SELECT * FROM escenarios', function(error, result) {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, result);
            }
        });
    }
};

modelEscenarios.getEscenario = function(id,callback)
{
    if (connection)
    {

        connection.query('SELECT * FROM escenarios WHERE idEsc = ?', [id], function(error, result)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, result);
            }
        });
    }
};

modelEscenarios.insertEscenario = function(data,callback) {
    if (connection) {
        connection.query('INSERT INTO escenarios SET ?', data, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                //devolvemos la última id insertada
                callback(null, result);
            }
        });

    }
};


modelEscenarios.updateEscenario = function(data, callback)
{

    if(connection)
    {
        connection.query("UPDATE escenarios SET nombre=?, url=? WHERE  idEsc=? ", [data.nombre, data.url, data.id],function(error, result){
                if(error){
                    throw error;
                }else{
                    callback(null, {"msg": "Success"});
                }
            }
        );
    }
};

modelEscenarios.deleteEscenario = function(id, callback)
{
    if(connection)
    {

        connection.query('SELECT * FROM escenarios WHERE idEsc = ?', [id], function(err, row)
        {
            //si existe la id de la app a eliminar
            if(row)
            {
                connection.query("DELETE FROM escenarios WHERE idEsc=? ", [id],function(error, result){
                        if(error){
                            throw error;
                        }else{
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

modelEscenarios.getEscenariosApp = function(name,callback)
{
    if (connection)
    {

        connection.query('SELECT e.idEsc, e.nombre, e.url, a.ide FROM aplicaciones a INNER JOIN escenarios e ON a.ide = e.idApp  WHERE a.nombre=?', [name], function(error, result)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, result);
            }
        });
    }
};

modelEscenarios.getEscenariosApp2 = function(name,callback)
{
    if (connection)
    {

        connection.query('SELECT ide FROM aplicaciones WHERE nombre=?', [name], function(error, result)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, result);
            }
        });
    }
};





module.exports = modelEscenarios;


