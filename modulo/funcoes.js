/***********************************************************************
 * OBJETIVO: Este é um projeto para criação de uma API que será usada pelo WhatsApp
 * DATA-Inicial: 24/09/2025
 * DATA-termino:
 * AUTOR: Matheus Perez
 * VERSÃO: 1.0
 * *********************************************************************/

//Import das Dependências
const { profile } = require('console');
const dados = require('./contatos.js')
const MESSAGE_ERROR = {status: false, statuscode: 500, development: "Matheus Perez", description: "Este valor não foi encontrado"}


//Retorna todas as informações do Array
const getAll = function(){

    let returnAll = {status: true, statuscode: 200, development:'Matheus Perez', users: []};


//forEach: O ["whats-users"] por ter ifen (-) é colocado desta forma.
// Ele está no caminho do forEach pois ele é o ARRAY e o forEach é uma função de ARRAY 

    dados.contatos["whats-users"].forEach(function(item){
        returnAll.users.push(item)
    })

    if(returnAll.users != 0){
        //return returnAll;
        return returnAll;
    }else{
        return MESSAGE_ERROR;
    }
}

//Filtro por Profile

    const UserProfile = function(){

        let informationByProfile = {
            status: true,
            statuscode: false,
            development: "Matheus Perez",
            nome: '',
            nick: '',
            número: '',
            
          }



    }





module.exports = {
    returnAll
}


