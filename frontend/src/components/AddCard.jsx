import React, { useState } from "react";

const AddCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      dateOfBirth: dateOfBirth,
    };
    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("User data sent to the server successfully");
      } else {
        console.error("Failed to send user data to the server");
      }
    } catch (error) {
      console.error("Error sending user data:", error);
    }
    setName("");
    setEmail("");
    setMobileNumber("");
    setDateOfBirth("");
    setIsOpen(false);
  };

  const handleCancel = () => {
    setName("");
    setEmail("");
    setMobileNumber("");
    setDateOfBirth("");
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="border border-blue-600 text-blue-600 text-center bg-transparent rounded font-semibold py-2 px-4 transition-all duration-300 hover:bg-blue-600 hover:text-white"
        onClick={() => setIsOpen(true)}
      >
        Add User
      </button>
      {isOpen && (
        <div>
          <div className="bg-[#DBE1E3] bg-opacity-75 absolute inset-0" />
          <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
            <div className="bg-white rounded-lg p-10 w-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Mobile Number:
                  </label>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
