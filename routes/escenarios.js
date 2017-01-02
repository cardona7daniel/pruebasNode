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
                console.log(result);
                callback(null, result);
            }
        });
    }
};

modelEscenarios.getEscenario = function(id,callback)
{
    if (connection)
    {

        connection.query('SELECT * FROM escenarios WHERE id = ?', [id], function(error, result)
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

modelEscenarios.insertEscenario = function(data,callback) {
    if (connection) {
        connection.query('INSERT INTO escenarios SET ?', data, function (error, result) {
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


modelEscenarios.updateEscenario = function(data, callback)
{
    //console.log(userData); return;
    if(connection)
    {
        connection.query("UPDATE escenarios SET nombre=?, url=? WHERE  id=? ", [data.nombre, data.url, data.id],function(error, result){
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

modelEscenarios.deleteEscenario = function(id, callback)
{
    if(connection)
    {

        connection.query('SELECT * FROM escenarios WHERE id = ?', [id], function(err, row)
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


module.exports = modelEscenarios;
