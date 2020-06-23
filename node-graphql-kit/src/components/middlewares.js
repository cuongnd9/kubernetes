import joi from 'joi';
import { flow } from 'lodash';
import { SchemaValidationError } from './errors';

export const middleware = (...parameters) => (obj, args, context, info) => {
  const resolver = parameters[parameters.length - 1];
  flow([...parameters.slice(0, parameters.length - 1)])(obj, args, context, info);
  return resolver(obj, args, context, info);
};

export const validateSchema = (schema) => (...rest) => {
  const root = rest[0];
  const args = rest[1];
  const value = {
    ...root,
    ...args,
  };
  const validateOptions = { allowUnknown: true, abortEarly: false };
  const validation = joi.validate(value, schema, validateOptions);
  if (validation.error) {
    throw new SchemaValidationError(validation.error);
  }
  return rest;
};
