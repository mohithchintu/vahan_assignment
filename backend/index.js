import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./manageDB.js";

const app = express();

app.use(express.json());

// Get full data
app.get("/user", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

// Get data by id
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.send(user);
});

// Post data
app.post("/user", async (req, res) => {
  console.log(req.body);
  const { name, email, mobileNumber, dateOfBirth } = req.body;
  if (!name || !email || !mobileNumber || !dateOfBirth)
    return res.status(400).json({ error: "Missing fields in request body" });

  try {
    const newUser = await createUser({
      name,
      email,
      mobileNumber,
      dateOfBirth,
    });
    res.status(201).json({ newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Update user by id
app.put("/user/:id", async (req, res) => {
  const uid = req.params.id;
  const { name, email, mobileNumber, dateOfBirth } = req.body;

  try {
    const updatedUser = await updateUser(uid, {
      name,
      email,
      mobileNumber,
      dateOfBirth,
    });
    res.json({ updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
});

// Delete user by id
app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await deleteUser(id);
    res.status(204).send("Deleted Successful");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

app.listen(5000, () => {
  console.log("Server is running");
});
