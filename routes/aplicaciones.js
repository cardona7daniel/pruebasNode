var express=require("express");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebas',
    port: 3306
});

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion correcta.');
    }
});

var modelApp={};

modelApp.getAll=function (callback) {
    if (connection)
    {
        connection.query('SELECT * FROM aplicaciones', function(error, result) {
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

modelApp.getApp = function(id,callback)
{
    if (connection)
    {

        connection.query('SELECT * FROM aplicaciones WHERE ide = ?', [id], function(error, result)
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

modelApp.insertApp = function(data,callback) {
    if (connection) {
        connection.query('INSERT INTO aplicaciones SET ?', data, function (error, result) {
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


modelApp.updateApp = function(data, callback)
{

    if(connection)
    {
        connection.query("UPDATE aplicaciones SET nombre=?, descripcion=? WHERE  ide=? ", [data.nombre, data.descripcion, data.id],function(error, result){
                if(error){
                    throw error;
                }else{
                    callback(null, {"msg": "Success"});
                }
            }
        );
    }
};

modelApp.deleteApp = function(id, callback)
{
    if(connection)
    {

        connection.query('SELECT * FROM aplicaciones WHERE ide = ?', [id], function(err, row)
        {
            //si existe la id de la app a eliminar
            if(row)
            {
                connection.query("DELETE FROM aplicaciones  WHERE ide=? ", [id],function(error, result){
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




module.exports = modelApp;