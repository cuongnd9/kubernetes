import db from '../models';

class CatService {
  static getCats() {
    return db.Cat.findAll({
      include: [
        {
          model: db.Category,
          as: 'category',
        },
      ],
    });
  }

  static createCat({ name, color, categoryId }) {
    return db.Cat.create({
      name,
      color,
      categoryId,
    });
  }
}

export default CatService;
