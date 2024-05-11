import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: "VAHAN_DB",
  })
  .promise();

// Get full data
export async function getUsers() {
  const [usersData] = await pool.query(`SELECT * FROM users`);
  return usersData;
}

// Get data by id
export async function getUser(id) {
  const [userdata] = await pool.query(
    `SELECT * FROM users 
        WHERE uid = ?`,
    [id]
  );
  return userdata;
}

// Post data
export async function createUser(udata) {
  const { name, email, mobileNumber, dateOfBirth } = udata;
  const result = await pool.query(
    `INSERT INTO users (name, email, mobileNumber, dateOfBirth)
       VALUES (?, ?, ?, ?)`,
    [name, email, mobileNumber, dateOfBirth]
  );
  return result;
}

// Update user data by id
export async function updateUser(uid, newData) {
  const { name, email, mobileNumber, dateOfBirth } = newData;
  const result = await pool.query(
    `UPDATE users 
       SET name = ?, email = ?, mobileNumber = ?, dateOfBirth = ? 
       WHERE uid = ?`,
    [name, email, mobileNumber, dateOfBirth, uid]
  );
  return result;
}

// Delete user by id
export async function deleteUser(id) {
  const result = await pool.query(`DELETE FROM users WHERE uid = ?`, [id]);
  return result;
}
