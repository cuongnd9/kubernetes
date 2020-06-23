"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _signale = _interopRequireDefault(require("signale"));

var _cat = _interopRequireDefault(require("./cat.model"));

var _category = _interopRequireDefault(require("./category.model"));

var _config = _interopRequireDefault(require("../components/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sequelize = new _sequelize.Sequelize({
  dialect: 'postgres',
  username: _config["default"].pgUser,
  password: _config["default"].pgPassword,
  database: _config["default"].pgDB,
  host: _config["default"].pgHost,
  port: _config["default"].pgPort,
  logging: _config["default"].nodeEnv === 'development' ? console.log : false,
  define: {
    underscored: true
  }
});
sequelize.authenticate()["catch"](function (e) {
  _signale["default"].watch(e);

  process.exit(1);
});
var models = {
  Cat: _cat["default"],
  Category: _category["default"]
};
Object.values(models).forEach(function (model) {
  return model.init(sequelize);
});
Object.values(models).filter(function (model) {
  return typeof model.associate === 'function';
}).forEach(function (model) {
  return model.associate(models);
});

var db = _objectSpread({
  sequelize: sequelize
}, models);

var _default = db;
exports["default"] = _default;