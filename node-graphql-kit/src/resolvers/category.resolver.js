import CategoryService from '../services/category.service';

const resolver = {
  Query: {
    categories: () => CategoryService.getCategories(),
  },
  Mutation: {
    createCategory: (_, args) => CategoryService.createCategory(args),
  },
};

export default resolver;
