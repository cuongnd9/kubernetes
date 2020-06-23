import express from 'express';
import { celebrate, Joi } from 'celebrate';
import Controller from '../controllers/cat.controller';

const router = express.Router();
const controller = new Controller();

router.get(
  '/',
  celebrate({
    query: {
      skip: Joi.number()
        .integer()
        .min(0),
      take: Joi.number()
        .integer()
        .min(0),
    },
  }),
  controller.action('list'),
);

router.post(
  '/',
  celebrate({
    body: {
      name: Joi.string().required(),
      color: Joi.string().required(),
      image: Joi.string().required(),
    },
  }),
  controller.action('create'),
);

export default router;
