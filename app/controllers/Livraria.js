'use strict';

var utils = require('../utils/writer.js');
var Livraria = require('../service/LivrariaService');

module.exports.insere = function insere (req, res, next) {
  var body = req.swagger.params['body'].value;
  Livraria.insere(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lista autores = function lista autores (req, res, next) {
  var autorId = req.swagger.params['autorId'].value;
  Livraria.lista autores(autorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchInventory = function searchInventory (req, res, next) {
  var searchString = req.swagger.params['searchString'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Livraria.searchInventory(searchString,skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
