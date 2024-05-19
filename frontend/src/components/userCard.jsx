import React from "react";
import EditCard from "./EditCard";
import { MdDeleteOutline } from "react-icons/md";

const UserCard = ({ user, onDelete }) => {
  const { name, email, mobileNumber, dateOfBirth } = user;
  const d = new Date(dateOfBirth);
  const inputdob =
    d.getDate().toString().padStart(2, "0") +
    "-" +
    (d.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    d.getFullYear().toString();
  const handleDelete = () => {
    onDelete(user.uid);
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(dateOfBirth);

  return (
    <div className="bg-white p-3 max-w-2xl shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-3 sm:px-6 flex justify-between items-center">
        <h3 className="text-2xl leading-6 font-semibold text-gray-900">
          {name}
        </h3>
        <div className="flex gap-2">
          <EditCard user={user} />
          <button className="bg-red-600 rounded-md p-2" onClick={handleDelete}>
            <MdDeleteOutline color="white" />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div>
          <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">Name</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {name}
            </div>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">
              Mobile Number
            </div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {mobileNumber}
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">
              Email address
            </div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {email}
            </div>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">
              Date Of Birth
            </div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {inputdob}
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">Age</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {age}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
