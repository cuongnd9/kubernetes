import path from 'path';
import signale from 'signale';
import { migrateDB } from './components/utils';
import db from './models';
import app from './app';

const main = async () => {
  const pathToMigration = path.join(__dirname, 'migrations');
  await migrateDB(db.sequelize, pathToMigration).catch(signale.watch);
  app();
};

main().catch(signale.watch);
