import React from 'react';
import SelectionsModal from '../../components/SelectionsModal';
import Image from 'next/image';
import { XIcon } from '@heroicons/react/outline';

const Selections = ({
  entries,
  checkSelected,
  handleRemove,
  handleSelect,
  teamName,
  showButton,
  selections,
}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  // function that returns the total ranking of the selections
  function getTotalRanking() {
    let totalRanking = 0;
    selections.forEach((selection) => {
      totalRanking += selection.ranking;
    });
    return totalRanking;
  }

  return (
    <>
      <div className="relative min-h-screen font-inter bg-mgreen py-10">
        <div className="flex flex-col md:flex-row md:flex-grow md:justify-around w-full max-w-6xl mx-auto px-4 gap-6">
          <div className="text-base-100 font-bold text-4xl">Selections</div>
          <div className="text-base-100 font-bold text-4xl">{teamName}</div>
          <div className="text-base-100 text-md tracking-wide leading-7">
            Time to select your 4 golfers. The world ranking of each golfer is shown beside their name. The total world ranking of your selections must be 175 or over.
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col w-full ">
              <div className="w-full flex justify-start">
                <div className="text-md font-bold m-2 text-left w-1/2">
                  Selection
                </div>
                <div className="text-md font-bold m-2">Ranking</div>
              </div>

              {selections.map((s) => (
                <>
                  <div className="flex justify-start w-full border-b">
                    <div className="m-2 text-md text-left w-1/2">
                      {s.last_name}
                    </div>
                    <div className="m-2 text-md">{s.ranking}</div>
                  </div>
                </>
              ))}
              <div className="flex justify-start w-full">
                <div className="w-1/2"></div>
                {getTotalRanking() >= 150 ? (
                  <div className="font-bold text-right text-xl bg-mgreen p-2 rounded-lg">
                    {getTotalRanking()}/150
                  </div>
                ) : (
                  <div className="font-bold text-right text-xl  bg-red-300 p-2 rounded-lg">
                    {getTotalRanking()}/150
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 md:gap-x-10">
            {entries.map((player) => (
              <div
                className={classNames(
                  checkSelected(player.player_id)
                    ? 'bg-mred border-2 border-black  ring-black '
                    : 'bg-white',
                  'card  p-2 cursor-pointer overflow-visible'
                )}
                onClick={() => handleSelect(player)}
                key={player.player_id}
              >
                <div className="flex items-center justify-start gap-3 w-full">
                  <Image
                    width={40}
                    height={40}
                    src={`/flags/${player.country}.svg`}
                    // src={`/headshots/${player.player_id}.webp`}
                    alt={player.country}
                   
                  ></Image>

                  <div className="flex flex-col items-start flex-grow ml-1">
                    <div
                      className={classNames(
                        checkSelected(player.player_id)
                          ? 'text-white'
                          : 'text-gray-900',
                        'card-title'
                      )}
                    >
                      {player.last_name}
                    </div>
                    <div className="flex gap-2">
                      {/* <Image
                                                    width={20}
                                                    height={20}
                                                    src={`/flags/${player.country}.svg`}
                                                    // src={`/headshots/${player.player_id}.webp`}
                                                    alt={player.country}
                                                ></Image> */}
                      <div
                        className={classNames(
                          checkSelected(player.player_id)
                            ? 'text-white'
                            : 'text-gray-800',
                          'inline text-sm'
                        )}
                      >
                        {player.first_name}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    {/* <div className="text-[0.6rem] uppercase">Ranking</div> */}
                    <div
                      className={classNames(
                        checkSelected(player.player_id)
                          ? 'bg-white'
                          : 'bg-green-200',
                        'badge p-4 font-bold mr-2'
                      )}
                    >
                      <span className="text-xs font-light mr-2">R: </span>{' '}
                      {player.ranking}
                    </div>
                  </div>
                </div>

                {/* <div className="">{player.first_name} {player.last_name}</div>
                                <div className="">{player.ranking}</div> */}
                {checkSelected(player.player_id) && (
                  <div
                    onClick={(e) => handleRemove(e, player)}
                    className="absolute -right-2 -top-2 border border-black rounded-full"
                  >
                    <XIcon className="w-4 text-red-700 bg-white rounded-full"></XIcon>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <button onClick={() => handleSubmit()} className="p-3 bg-green-50 m-3 rounded-lg">Add Team</button> */}
          {showButton()}
        </div>
        {/* <div className="fixed bottom-0 left-0 right-0 z-100"><pre className="text4xl text-white bg-black">{JSON.stringify(selections, null, 2)}</pre></div> */}
      </div>
      <SelectionsModal
        teamName={teamName}
        selections={selections}
      ></SelectionsModal>
    </>
  );
};

export default Selections;
