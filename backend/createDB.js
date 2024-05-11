import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const DBconnection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
});

const checkDBQuery =
  "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'VAHAN_DB' ";

DBconnection.query(checkDBQuery, (err, results) => {
  if (err) throw err;

  if (results.length === 0) {
    const createDBQuery = "CREATE DATABASE VAHAN_DB";
    DBconnection.query(createDBQuery, (err, result) => {
      if (err) throw err;
      console.log("Database created successfully");
      createTable();
    });
  } else {
    console.log("Database already exists");
    createTable();
  }
});

function createTable() {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: "VAHAN_DB",
  });

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      uid INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      mobileNumber BIGINT UNSIGNED NOT NULL,
      dateOfBirth DATE NOT NULL,
      creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error("Error creating table:", err);
      return;
    }
    console.log("Table created successfully.");
    connection.end();
    DBconnection.end((err) => {
      if (err) throw err;
      console.log("Connection closed");
    });
  });
}
