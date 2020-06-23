"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CategoryService = /*#__PURE__*/function () {
  function CategoryService() {
    _classCallCheck(this, CategoryService);
  }

  _createClass(CategoryService, null, [{
    key: "getCategories",
    value: function getCategories() {
      return _models["default"].Category.findAll({
        include: [{
          model: _models["default"].Cat,
          as: 'cats'
        }]
      });
    }
  }, {
    key: "createCategory",
    value: function createCategory(_ref) {
      var name = _ref.name;
      return _models["default"].Category.create({
        name: name
      });
    }
  }]);

  return CategoryService;
}();

var _default = CategoryService;
exports["default"] = _default;