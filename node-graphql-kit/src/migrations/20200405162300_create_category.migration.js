import { DataTypes } from 'sequelize';

const migration = {
  up: (queryInterface) => queryInterface.createTable('categories', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('categories'),
};

export default migration;
