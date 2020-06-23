"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _middlewares = require("../components/middlewares");

var _cat = _interopRequireDefault(require("../services/cat.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolver = {
  Query: {
    cats: function cats() {
      return _cat["default"].getCats();
    }
  },
  Mutation: {
    createCat: (0, _middlewares.middleware)((0, _middlewares.validateSchema)({
      color: _joi["default"].string().valid('black', 'white')
    }), function (_, args) {
      return _cat["default"].createCat(args);
    })
  }
};
var _default = resolver;
exports["default"] = _default;