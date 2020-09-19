import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';

const databaseFile = 'database.db';

const db = new sqlite3.Database(databaseFile,
  sqlite3.OPEN_READWRITE,
  (err: Error | null): void => {
    if (err) {
      console.error(err.message);
    }
    console.info('Connected to database.');
  });

const createDatabase = () => {
  if (fs.existsSync(path.resolve(databaseFile))) return

  const createDB = new sqlite3.Database(databaseFile,
    (err: Error | null): void => {
      if (err) {
        console.error(err.message);
      }
      console.info('Connected to database.');
    });

  createDB.run(`CREATE TABLE USER
                  ( ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    NAME TEXT NOT NULL,
                    EMAIL TEXT NOT NULL UNIQUE
                  )`);
}


export default db;
export { createDatabase };
