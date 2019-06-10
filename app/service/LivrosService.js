'use strict';


/**
 * Retorna livro com a id informada
 *
 * livroId Long informacoes do libro retornado
 * returns List
 **/
exports.lista livros = function(livroId) {
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

