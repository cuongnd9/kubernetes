import { Model, DataTypes } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
    }, {
      sequelize,
      modelName: 'categories'
    });
  }
  static associate(models) {
    this.hasMany(models.Cat, {
      as: 'cats',
      foreignKey: 'categoryId'
    });
  }
}

export default Category
