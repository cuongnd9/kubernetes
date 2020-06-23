import { ApolloError } from 'apollo-server-errors';
import { snakeCase } from 'lodash';

export class AppError extends ApolloError {
  constructor(message = 'Internal Service Error') {
    super(message);
    this.extensions.code = snakeCase(this.constructor.name).toUpperCase();
  }
}

export class BusinessError extends ApolloError {
  constructor(message = 'There is business error happened') {
    super(message);
    this.extensions.code = snakeCase(this.constructor.name).toUpperCase();
  }
}

export class DatabaseError extends AppError {
  constructor(message = 'There is database error happened') {
    super(message);
  }
}

export class DatabaseValidationError extends AppError {
  constructor(message = 'There is database validation error happened') {
    super(message);
  }
}

export class SchemaValidationError extends BusinessError {
  constructor(error) {
    super(error.message);
    let payload = {};
    error.details.forEach((item) => {
      const {
        path, type, message, context,
      } = item;
      payload = {
        ...payload,
        [path.toString()]: {
          message,
          type,
          context,
        },
      };
    });
    this.extensions.payload = payload;
  }
}
