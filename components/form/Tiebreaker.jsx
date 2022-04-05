import React from 'react';
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const Tiebreaker = ({
  setTiebreaker,
  tiebreaker,
  setStep,
  teamName,
  selections,
  handleAddTeam,
}) => {
  return (
    <div className="flex flex-col mx-3 pt-10 gap-5">
      <div
        className="btn btn-sm bg-base-100/60 w-32"
        onClick={() => setStep(2)}
      >
        <ArrowNarrowLeftIcon className="w-4 mr-2"></ArrowNarrowLeftIcon>
        Back
      </div>
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
        autoComplete='off'
        onChange={(e) => setTiebreaker(e.target.value)}
      />
      {tiebreaker.length > 0 && (
        <button
          onClick={() => handleAddTeam()}
          className="btn  btn-accent max-w-md"
        >
          Next
        </button>
      )}

      <div className=" md:relative mt-8 bg-base-100 card  shadow-2xl p-3">
        <div className="card-title ml-3">{teamName}</div>
        {selections.map((p, index) => {
          return (
            <div key={index} className="px-4 py-2">
              <div key={p.player_id} className="flex gap-4">
                <Image
                  src={`/flags/${p.country}.svg`}
                  width={30}
                  height={20}
                  alt={`${p.country} flag`}
                ></Image>
                {/* <ChevronRightIcon className='w-3 mr-2'></ChevronRightIcon> */}
                <div className="text-lg grow font-bold">
                  {p.last_name}{' '}
                  <span className="font-light text-sm">{p.first_name}</span>
                </div>
                <div className="">{p.ranking}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tiebreaker;
