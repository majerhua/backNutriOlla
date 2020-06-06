'use strict'
const con = require('../conexion/conexion');

function getGrupoAlimenticios(req,res){

    con.query("SELECT * FROM Grupo_Alimenticio", function (err, sexo, field) {
        if (err) return res.status(500).send({message:'Error al realizar la peticion'})
        res.status(200).send({data:sexo})
    });
}

module.exports = {
	getGrupoAlimenticios
}
