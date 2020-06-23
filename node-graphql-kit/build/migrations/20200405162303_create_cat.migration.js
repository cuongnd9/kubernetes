"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var migration = {
  up: function up(queryInterface) {
    return queryInterface.createTable('cats', {
      id: {
        type: _sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: _sequelize.DataTypes.UUIDV4
      },
      name: {
        type: _sequelize.DataTypes.STRING
      },
      color: {
        type: _sequelize.DataTypes.STRING,
        allowNull: true
      },
      category_id: {
        type: _sequelize.DataTypes.UUID,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      created_at: {
        type: _sequelize.DataTypes.DATE
      },
      updated_at: {
        type: _sequelize.DataTypes.DATE
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('cats');
  }
};
var _default = migration;
exports["default"] = _default;