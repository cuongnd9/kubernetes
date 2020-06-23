import db from '../models';

class CategoryService {
  static getCategories() {
    return db.Category.findAll({
      include: [
        {
          model: db.Cat,
          as: 'cats',
        },
      ],
    });
  }

  static createCategory({ name }) {
    return db.Category.create({
      name,
    });
  }
}

export default CategoryService;
