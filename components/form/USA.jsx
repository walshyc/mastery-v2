import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { usa } from '../../entries';
import Image from 'next/image';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const USA = ({ selected, setSelected, handleSelect }) => {
  return (
    <>
      <div className="text-gray-100 font-bold text-4xl">USA Golfer's</div>
      <div className="text-gray-100 text-xs tracking-wide leading-5">
        You need to select 2 USA golfers for your team. You can select the first
        here and then click next
      </div>
      <div className="">
        <RadioGroup value={selected} onChange={handleSelect(selected)}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {usa.map((player) => (
              <RadioGroup.Option
                key={player.player_id}
                value={player}
                className={({ active, checked }) =>
                  ` ${
                    active
                      ? 'ring-1 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                      : ''
                  }
          ${checked ? 'bg-green-600/70 border-2 text-white' : 'bg-white'}
            relative rounded-lg shadow-md px-3 py-2 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-start gap-3 w-full">
                      <Image
                        width={50}
                        height={50}
                        src={`/headshots/${player.player_id}.webp`}
                        className="rounded-lg"
                        // src={`/headshots/${player.player_id}.webp`}
                        alt={player.country}
                      ></Image>
                      <Image
                        width={30}
                        height={30}
                        src={`/flags/${player.country}.svg`}
                        // src={`/headshots/${player.player_id}.webp`}
                        alt={player.country}
                      ></Image>

                      <div className="flex items-start flex-grow ml-1">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium text-base ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {player.last_name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-800'
                            }`}
                          >
                            <span className="font-light text-md">
                              {player.first_name}
                            </span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export default USA;
