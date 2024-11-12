import React from "react";

const DeliveryHeader = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full"></div>
          <div>
            <h3 className="text-gray-900 font-medium text-base sm:text-lg">
              Tata Consultancy Services Ltd
            </h3>
            <div className="flex items-center space-x-2 text-green-500 text-sm">
              <span className="material-icons text-lg">star</span>
              <span className="font-medium">3.7</span>
              <span className="text-gray-500">Based on 81.7k Reviews</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md text-sm">
            Follow
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md text-sm">
            <span className="material-icons text-lg">share</span>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md text-sm">
            <span className="material-icons text-lg">bookmark</span>
          </button>
        </div>
      </div>
      <div className="mt-6 text-gray-700 text-sm">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 text-green-500">
            <span className="material-icons text-lg">attach_money</span>
            <span className="font-medium">$40,000 - $60,000</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="material-icons text-lg">badge</span>
            <span>#12345</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="material-icons text-lg">verified_user</span>
            <span>#120001</span>
          </div>
        </div>
        <button className="mt-4 text-green-500 font-medium hover:text-green-600">
          Read More
        </button>
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md block w-full sm:w-auto">
          Apply Job
        </button>
      </div>
    </div>
  );
};

export default DeliveryHeader;
