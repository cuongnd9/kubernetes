"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var typeDef = "\n  extend type Query {\n    categories: [Category]\n  }\n\n  extend type Mutation {\n    createCategory(name: String!): Category\n  }\n\n  type Category {\n    id: String\n    name: String\n    cats: [Cat]\n    createdAt: DateTime\n    updatedAt: DateTime\n  }\n";
var _default = typeDef;
exports["default"] = _default;