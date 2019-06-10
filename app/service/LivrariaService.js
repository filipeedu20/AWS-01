'use strict';


/**
 * Adiciona novo livro
 * Adiciona novo livro no sistema
 *
 * body Livros Add livro (optional)
 * no response value expected for this operation
 **/
exports.insere = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retorna autor com a id informada
 *
 * autorId Long Retorna autor com a id informac
 * returns List
 **/
exports.lista autores = function(autorId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ano_lancamento" : "ano_lancamento",
  "isbn" : "Widget Adapter",
  "genero" : "genero",
  "nome" : "Widget Adapter",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "editora" : "editora"
}, {
  "ano_lancamento" : "ano_lancamento",
  "isbn" : "Widget Adapter",
  "genero" : "genero",
  "nome" : "Widget Adapter",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "editora" : "editora"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna livros
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * searchString String pass an optional search string for looking up inventory
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximo de itens que será retornado (optional)
 * returns List
 **/
exports.searchInventory = function(searchString,skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ano_lancamento" : "ano_lancamento",
  "isbn" : "Widget Adapter",
  "genero" : "genero",
  "nome" : "Widget Adapter",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "editora" : "editora"
}, {
  "ano_lancamento" : "ano_lancamento",
  "isbn" : "Widget Adapter",
  "genero" : "genero",
  "nome" : "Widget Adapter",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "editora" : "editora"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

