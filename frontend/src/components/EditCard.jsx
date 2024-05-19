import React, { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";

const EditCard = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);
  const d = new Date(user.dateOfBirth);
  const inputdob =
    d.getFullYear().toString() +
    "-" +
    (d.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    d.getDate().toString().padStart(2, "0");

  const [dateOfBirth, setDateOfBirth] = useState(inputdob);

  const handleCancel = () => {
    setName(user.name);
    setEmail(user.email);
    setMobileNumber(user.mobileNumber);
    setDateOfBirth(inputdob);
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      dateOfBirth: dateOfBirth,
    };
    try {
      const response = await fetch(`http://localhost:5000/user/${user.uid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("User data edited");
      } else {
        console.error("Failed to edit user data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <button
        className="bg-blue-600 rounded-md p-2"
        onClick={() => setIsOpen(true)}
      >
        <MdOutlineModeEditOutline color="white" />
      </button>
      {isOpen && (
        <div className="">
          <div className="bg-[#DBE1E3] bg-opacity-75 inset-0 fixed" />
          <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 max-w-md">
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

export default EditCard;
