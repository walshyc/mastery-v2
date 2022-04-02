import React from 'react';

const TeamName = ({ setTeamName, setStep, teamName }) => {
  return (
    <div className="flex flex-col mx-3 pt-10 gap-5">
      <div className="text-base-100 font-bold text-4xl">Team Name</div>
      <div className="text-base-100 text-md tracking-wide">
        Enter the name you want to display publicly. Use your own name or get
        creative!
      </div>
      <input
        className="input input-bordered w-full max-w-md"
        type="text"
        name="team_name"
        id="team_name"
        placeholder="Team Name..."
        onChange={(e) => setTeamName(e.target.value)}
      />
      {teamName.length > 0 && (
        <button
          onClick={() => setStep(2)}
          className="btn btn-outline btn-accent max-w-md"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default TeamName;
