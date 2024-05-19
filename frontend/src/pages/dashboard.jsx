import React, { useState, useEffect } from "react";
import UserCard from "../components/usercard";
import AddCard from "../components/AddCard";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/user");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/user/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("User deleted successfully");
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  return (
    <div className="space-y-5 p-2">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <AddCard />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {users.map((user) => (
          <UserCard key={user.uid} user={user} onDelete={handleDeleteUser} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
