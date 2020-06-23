"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.migrateDB = exports.formatError = void 0;

var _umzug = _interopRequireDefault(require("umzug"));

var _lodash = require("lodash");

var _sequelize = require("sequelize");

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formatError = function formatError(error) {
  var formattedError = new _errors.AppError(error.message || 'Internal Service Error');
  var originalError = (0, _lodash.get)(error, 'originalError');

  if (originalError instanceof _errors.SchemaValidationError) {
    formattedError = error;
  } else if (originalError instanceof _sequelize.ValidationError) {
    formattedError = new _errors.DatabaseValidationError(originalError.message);
  } else if (originalError instanceof _sequelize.BaseError) {
    formattedError = new _errors.DatabaseError(originalError.message);
  }

  var _formattedError = formattedError,
      message = _formattedError.message,
      locations = _formattedError.locations,
      path = _formattedError.path,
      extensions = _formattedError.extensions;
  return {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  };
};

exports.formatError = formatError;

var migrateDB = function migrateDB(sequelize, path) {
  return new _umzug["default"]({
    migrations: {
      path: path,
      pattern: /\.migration.js$/,
      params: [sequelize.getQueryInterface(), sequelize.constructor, function () {
        throw new Error("Migration tried to use old style \"done\" callback.\n          Please upgrade to \"umzug\" and return a promise instead.");
      }]
    },
    storage: 'sequelize',
    storageOptions: {
      sequelize: sequelize
    }
  }).up();
};

exports.migrateDB = migrateDB;