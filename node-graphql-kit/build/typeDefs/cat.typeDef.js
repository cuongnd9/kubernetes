"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var typeDef = "\n  type Query {\n    cats(id: String): [Cat]\n  }\n\n  type Mutation {\n    createCat(name: String!, color: String, categoryId: String!): Cat\n  }\n\n  type Cat {\n    id: String\n    name: String\n    color: String\n    categoryId: String\n    category: Category\n    createdAt: DateTime\n    updatedAt: DateTime\n  }\n";
var _default = typeDef;
exports["default"] = _default;