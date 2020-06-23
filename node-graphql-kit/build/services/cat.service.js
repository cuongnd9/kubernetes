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

var CatService = /*#__PURE__*/function () {
  function CatService() {
    _classCallCheck(this, CatService);
  }

  _createClass(CatService, null, [{
    key: "getCats",
    value: function getCats() {
      return _models["default"].Cat.findAll({
        include: [{
          model: _models["default"].Category,
          as: 'category'
        }]
      });
    }
  }, {
    key: "createCat",
    value: function createCat(_ref) {
      var name = _ref.name,
          color = _ref.color,
          categoryId = _ref.categoryId;
      return _models["default"].Cat.create({
        name: name,
        color: color,
        categoryId: categoryId
      });
    }
  }]);

  return CatService;
}();

var _default = CatService;
exports["default"] = _default;