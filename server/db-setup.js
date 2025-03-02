// db-setup.js
import usersDB from "./database/users.db";
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(usersDB, 
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Database "${usersDB}" created or already exists.`);
    }
  }
);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
    );
  `);
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Database connection closed.');
  }
});