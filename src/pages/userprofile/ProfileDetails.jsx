import React from "react";

const ProfileDetails = () => {
  // Sample user profile data
  const profile = {
    firstName: "Phill",
    lastName: "Forden",
    age: 26,
    gender: "Male",
    email: "phillforden01@gmail.com",
    phone: "+49 1478 514785547",
    country: "Germany",
    city: "Berlin",
    zipCode: "10054",
    street: "Berliner Stralle",
    houseNumber: "24",
    apartment: "3A",
    accounts: [
      { number: "**** **** **** 1141", expiry: "12/26" },
      { number: "**** **** **** 1241", expiry: "12/26" },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto sm:p-8 sm:max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Name:</p>
          <p>
            {profile.firstName} {profile.lastName}
          </p>
        </div>
        <div>
          <p className="font-medium">Age:</p>
          <p>{profile.age}</p>
        </div>
        <div>
          <p className="font-medium">Gender:</p>
          <p>{profile.gender}</p>
        </div>
        <div>
          <p className="font-medium">Email:</p>
          <p>{profile.email}</p>
        </div>
        <div>
          <p className="font-medium">Phone:</p>
          <p>{profile.phone}</p>
        </div>
        <div>
          <p className="font-medium">Location:</p>
          <p>
            {profile.street} {profile.houseNumber}, {profile.city},{" "}
            {profile.country} {profile.zipCode}
          </p>
        </div>
        <div>
          <p className="font-medium">Accounts:</p>
          {profile.accounts.map((account, index) => (
            <p key={index}>
              Account {index + 1}: {account.number} ({account.expiry})
            </p>
          ))}
        </div>
      </div>
      <div className="mt-4 text-right">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
