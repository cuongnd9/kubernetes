import { Sequelize } from 'sequelize'
import signale from 'signale'

import Cat from './cat.model';
import Category from './category.model';
import config from '../components/config'

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: config.pgUser,
  password: config.pgPassword,
  database: config.pgDB,
  host: config.pgHost,
  port: config.pgPort,
  logging: config.nodeEnv === 'development' ? console.log : false,
  define: {
    underscored: true,
  }
})

sequelize
  .authenticate()
  .catch(e => {
    signale.watch(e)
    process.exit(1)
  })

const models = {Cat, Category};

Object.values(models)
  .forEach(model => model.init(sequelize));

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

const db = {
  sequelize,
  ...models,
};

export default db;
