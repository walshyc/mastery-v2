import React from 'react';
import Image from 'next/image';

const TeamName = ({ setTeamName, setStep, teamName }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-8">
      <div className="order-last lg:order-first">
        <Image
          alt="masters scoreboard"
          src="/masters-scoreboard.webp"
          width={700}
          height={450}
          className="rounded-2xl"
        ></Image>
      </div>
      <div className="flex flex-col pt-10 gap-5">
        <div className="text-base-100 font-bold text-4xl">Team Name</div>
        <div className="text-base-100 text-md tracking-wide">
          Enter the name you want to display publicly. Use your own name or get
          creative!
        </div>
        <input
          className="input input-bordered max-w-2xl"
          type="text"
          name="team_name"
          id="team_name"
          placeholder="Enter Team Name..."
          onChange={(e) => setTeamName(e.target.value)}
          autoComplete='off'
        />
        {teamName.length > 0 && (
          <button
            onClick={() => setStep(2)}
            className="btn btn-outline btn-accent max-w-lg"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamName;
