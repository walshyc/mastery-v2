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

  return (
    <>
      <div className="relative min-h-screen font-inter bg-mgreen py-10">
        <div className="flex flex-col w-full max-w-6xl mx-auto px-4">
          {/* <UserInfo></UserInfo> */}
          {/* <TeamInfo></TeamInfo> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {entries.map((player) => (
              <div
                className={classNames(
                  checkSelected(player.player_id)
                    ? 'bg-mred border-2 border-black  ring-black '
                    : 'bg-white',
                  'relative rounded-lg shadow-xl px-3 py-2 cursor-pointer flex focus:outline-none'
                )}
                onClick={() => handleSelect(player)}
                key={player.player_id}
              >
                <div className="flex items-center justify-start gap-3 w-full">
                  <Image
                    width={50}
                    height={50}
                    src={`/flags/${player.country}.svg`}
                    // src={`/headshots/${player.player_id}.webp`}
                    alt={player.country}
                    className="border-2 border-black"
                  ></Image>

                  <div className="flex flex-col items-start flex-grow ml-1">
                    <div
                      className={classNames(
                        checkSelected(player.player_id)
                          ? 'text-white'
                          : 'text-gray-900',
                        'font-medium text-xl'
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
                          'inline'
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
                        'rounded-lg border-white border w-10 h-10 flex justify-center p-2  text-green-900 shadow-2xl font-bold'
                      )}
                    >
                      {player.ranking}
                    </div>
                  </div>
                </div>

                {/* <div className="">{player.first_name} {player.last_name}</div>
                                <div className="">{player.ranking}</div> */}
                {checkSelected(player.player_id) && (
                  <div
                    onClick={(e) => handleRemove(e, player)}
                    className="absolute -right-2 -top-2"
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
