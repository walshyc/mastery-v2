import React from 'react';

const Tiebreaker = ({
  setTiebreaker,
  tiebreaker,
  setStep,
  teamName,
  handleAddTeam,
}) => {
  return (
    <div className="flex flex-col mx-3 pt-10 gap-5">
      <div className="text-base-100 font-bold text-4xl">Tiebreaker</div>
      <div className="text-base-100 text-md tracking-wide">
        In case of a tie, the team with the highest total ranking wins! If 2 or
        more have the same total ranking the person who guesses closest to this
        wins!
      </div>
      <div className="text-base-100 text-lg tracking-wide font-bold">
        Total Birdies scored by all golfers in the 4th Round
      </div>
      <input
        className="input input-bordered w-full max-w-md"
        type="number"
        name="team_name"
        id="team_name"
        placeholder="Enter Number here in digits"
        onChange={(e) => setTiebreaker(e.target.value)}
      />
      {tiebreaker.length > 0 && (
        <button
          onClick={() => handleAddTeam()}
          className="btn btn-outline btn-accent max-w-md"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Tiebreaker;
