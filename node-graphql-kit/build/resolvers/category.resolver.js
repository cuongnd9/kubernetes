"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _category = _interopRequireDefault(require("../services/category.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolver = {
  Query: {
    categories: function categories() {
      return _category["default"].getCategories();
    }
  },
  Mutation: {
    createCategory: function createCategory(_, args) {
      return _category["default"].createCategory(args);
    }
  }
};
var _default = resolver;
exports["default"] = _default;