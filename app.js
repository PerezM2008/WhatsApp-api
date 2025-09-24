/***********************************************************************
 * OBJETIVO: Este é um projeto para criação de uma API que será usada pelo WhatsApp
 * DATA-Inicial: 24/09/2025
 * DATA-termino:
 * AUTOR: Matheus Perez
 * VERSÃO: 1.0
 * *********************************************************************/

//Import das bibliotecas
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Import do arquivo de funções 
const dados = require('./modulo/funcoes.js')

//Porta do acesso da API com a HTTP
const PORT = process.PORT || 8080

app.use((require, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})

/*********************************   * ENDPOINT *   *************************************/

// 1º EndPoint - returnAll
app.get('v1/returnAll', function(request, response){

    var dadosAll = dados.getAll()

    response.status(dadosAll.statuscode)
    response.json(dadosAll)
})


