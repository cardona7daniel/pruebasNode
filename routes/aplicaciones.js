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

var model={};

model.getAll=function (callback) {
    if (connection)
    {
        connection.query('SELECT * FROM aplicaciones', function(error, result) {
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

model.getApp = function(id,callback)
{
    if (connection)
    {

        connection.query('SELECT * FROM aplicaciones WHERE id = ?', [id], function(error, result)
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

model.insertApp = function(data,callback) {
    if (connection) {
        connection.query('INSERT INTO aplicaciones SET ?', data, function (error, result) {
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


model.updateApp = function(data, callback)
{
    //console.log(userData); return;
    if(connection)
    {
        connection.query("UPDATE aplicaciones SET nombre=?, descripcion=? WHERE  id=? ", [data.nombre, data.descripcion, data.id],function(error, result){
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

model.deleteApp = function(id, callback)
{
    if(connection)
    {

        connection.query('SELECT * FROM users WHERE id = ?', [id], function(err, row)
        {
            //si existe la id de la app a eliminar
            if(row)
            {
                connection.query("DELETE FROM registros WHERE id=? ", [id],function(error, result){
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


module.exports = model;