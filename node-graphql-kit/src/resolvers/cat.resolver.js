import joi from 'joi';
import { middleware, validateSchema } from '../components/middlewares';
import CatService from '../services/cat.service';

const resolver = {
  Query: {
    cats() {
      return CatService.getCats();
    },
  },
  Mutation: {
    createCat: middleware(
      validateSchema({
        color: joi.string().valid('black', 'white'),
      }),
      (_, args) => CatService.createCat(args),
    ),
  },
};

export default resolver;
