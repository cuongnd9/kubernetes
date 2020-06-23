"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaValidationError = exports.DatabaseValidationError = exports.DatabaseError = exports.BusinessError = exports.AppError = void 0;

var _apolloServerErrors = require("apollo-server-errors");

var _lodash = require("lodash");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AppError = /*#__PURE__*/function (_ApolloError) {
  _inherits(AppError, _ApolloError);

  var _super = _createSuper(AppError);

  function AppError() {
    var _this;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Internal Service Error';

    _classCallCheck(this, AppError);

    _this = _super.call(this, message);
    _this.extensions.code = (0, _lodash.snakeCase)(_this.constructor.name).toUpperCase();
    return _this;
  }

  return AppError;
}(_apolloServerErrors.ApolloError);

exports.AppError = AppError;

var BusinessError = /*#__PURE__*/function (_ApolloError2) {
  _inherits(BusinessError, _ApolloError2);

  var _super2 = _createSuper(BusinessError);

  function BusinessError() {
    var _this2;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is business error happened';

    _classCallCheck(this, BusinessError);

    _this2 = _super2.call(this, message);
    _this2.extensions.code = (0, _lodash.snakeCase)(_this2.constructor.name).toUpperCase();
    return _this2;
  }

  return BusinessError;
}(_apolloServerErrors.ApolloError);

exports.BusinessError = BusinessError;

var DatabaseError = /*#__PURE__*/function (_AppError) {
  _inherits(DatabaseError, _AppError);

  var _super3 = _createSuper(DatabaseError);

  function DatabaseError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is database error happened';

    _classCallCheck(this, DatabaseError);

    return _super3.call(this, message);
  }

  return DatabaseError;
}(AppError);

exports.DatabaseError = DatabaseError;

var DatabaseValidationError = /*#__PURE__*/function (_AppError2) {
  _inherits(DatabaseValidationError, _AppError2);

  var _super4 = _createSuper(DatabaseValidationError);

  function DatabaseValidationError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is database validation error happened';

    _classCallCheck(this, DatabaseValidationError);

    return _super4.call(this, message);
  }

  return DatabaseValidationError;
}(AppError);

exports.DatabaseValidationError = DatabaseValidationError;

var SchemaValidationError = /*#__PURE__*/function (_BusinessError) {
  _inherits(SchemaValidationError, _BusinessError);

  var _super5 = _createSuper(SchemaValidationError);

  function SchemaValidationError(error) {
    var _this3;

    _classCallCheck(this, SchemaValidationError);

    _this3 = _super5.call(this, error.message);
    var payload = {};
    error.details.forEach(function (item) {
      var path = item.path,
          type = item.type,
          message = item.message,
          context = item.context;
      payload = _objectSpread(_objectSpread({}, payload), {}, _defineProperty({}, path.toString(), {
        message: message,
        type: type,
        context: context
      }));
    });
    _this3.extensions.payload = payload;
    return _this3;
  }

  return SchemaValidationError;
}(BusinessError);

exports.SchemaValidationError = SchemaValidationError;