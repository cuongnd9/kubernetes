import Umzug from 'umzug';
import { get } from 'lodash';
import { BaseError, ValidationError } from 'sequelize';
import {
  AppError, DatabaseError, DatabaseValidationError, SchemaValidationError,
} from './errors';

export const formatError = (error) => {
  let formattedError = new AppError(error.message || 'Internal Service Error');
  const originalError = get(error, 'originalError');
  if (originalError instanceof SchemaValidationError) {
    formattedError = error;
  } else if (originalError instanceof ValidationError) {
    formattedError = new DatabaseValidationError(originalError.message);
  } else if (originalError instanceof BaseError) {
    formattedError = new DatabaseError(originalError.message);
  }
  const {
    message, locations, path, extensions,
  } = formattedError;
  return {
    message,
    locations,
    path,
    extensions,
  };
};

export const migrateDB = (sequelize, path) => new Umzug({
  migrations: {
    path,
    pattern: /\.migration.js$/,
    params: [
      sequelize.getQueryInterface(),
      sequelize.constructor,
      () => {
        throw new Error(`Migration tried to use old style "done" callback.
          Please upgrade to "umzug" and return a promise instead.`);
      },
    ],
  },
  storage: 'sequelize',
  storageOptions: { sequelize },
}).up();
