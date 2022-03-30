import React from 'react';

const UserInfo = () => {




  return (
    <div className="flex flex-col mx-3 pt-10 gap-6">
      <input
        className="py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-green-300 focus-visible:ring-offset-2 focus-visible:border-green-500 sm:text-sm"
        type="text"
        name="first_name"
        id="first_name"
        placeholder="First name"
        required
      />
      <input
        className="py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-green-300 focus-visible:ring-offset-2 focus-visible:border-green-500 sm:text-sm"
        type="text"
        name="last_name"
        id="last_name"
        placeholder="Last name"
        required
      />
      <input
        className="py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-green-300 focus-visible:ring-offset-2 focus-visible:border-green-500 sm:text-sm"
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        required
      />
    </div>
  );
};

export default UserInfo;
