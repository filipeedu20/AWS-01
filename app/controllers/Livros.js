'use strict';

var utils = require('../utils/writer.js');
var Livros = require('../service/LivrosService');

module.exports.lista livros = function lista livros (req, res, next) {
  var livroId = req.swagger.params['livroId'].value;
  Livros.lista livros(livroId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
