import fs from 'fs';
import path from 'path';
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

let typeDefs = [...scalarTypeDefs];
fs
  .readdirSync(__dirname)
  .filter((fileName) => /typeDef.js$/.test(fileName))
  .forEach((fileName) => {
    const typeDef = require(path.join(__dirname, fileName));

    typeDefs = [
      ...typeDefs,
      typeDef.default,
    ];
  });

export default typeDefs;
