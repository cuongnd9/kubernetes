"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlYoga = require("graphql-yoga");

var _graphqlTools = require("graphql-tools");

var _signale = _interopRequireDefault(require("signale"));

var _utils = require("./components/utils");

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = function app() {
  var schema = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: _typeDefs["default"],
    resolvers: _resolvers["default"]
  });
  var server = new _graphqlYoga.GraphQLServer({
    schema: schema
  });
  var options = {
    formatError: _utils.formatError,
    debug: false
  };
  server.start(options, function (_ref) {
    var port = _ref.port;
    return _signale["default"].watch("Server is running on http://127.0.0.1:".concat(port));
  });
};

var _default = app;
exports["default"] = _default;