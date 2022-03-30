import React from 'react';


const TeamName = ({ setTeamName, setStep }) => {
  return (
    <div className="flex flex-col mx-3 pt-10 gap-5">
      <div className="text-gray-100 font-bold text-4xl">Team Name</div>
      <div className="text-gray-100 text-md tracking-wide">
        Enter the name you want to display publicly. Use your own name or get
        creative!
      </div>
      <input
        className="py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-1 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-green-300 focus-visible:ring-offset-2 focus-visible:border-green-500 sm:text-sm"
        type="text"
        name="team_name"
        id="team_name"
        placeholder="Rory's Hackers..."
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button
        onClick={() => setStep(2)}
        className="inline-block bg-transparent py-2 px-4 border border-white rounded-lg text-base font-medium text-white hover:bg-green-100 hover:text-mgreen cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default TeamName;
