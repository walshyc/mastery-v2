import React, { useState, Fragment } from 'react';
import { Listbox, Transition, RadioGroup } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { usa } from '../../entries';
import Image from 'next/image';
import USA from './USA';

const TeamInfo = () => {
  const [step, setStep] = useState(2);
  const [selected, setSelected] = useState(usa[0]);
  const [usaSelected, setUsaSelected] = useState(null);
  const [usaSelectedTwo, setUsaSelectedTwo] = useState(null);
  const [selections, setSelections] = useState({
    name: '',
    usa: '',
    ukie: '',
    row: '',
  });
  console.log(usaSelected);

  const handleSelect = (player) => {
    if (usaSelected === null) {
      setUsaSelectedTwo(player);
    } else {
      setUsaSelected(player);
    }
  };
  switch (step) {
    case 1:
      return (
        <>
          <div className="flex flex-col  mx-3 pt-10 gap-3">
            <div className="text-base-100 font-bold text-4xl">Team Name</div>
            <div className="text-base-100 text-xs tracking-wide">
              Enter the name you want to display publicly. Use your own name or
              get creative!
            </div>
            <input
              className="py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-1 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-green-300 focus-visible:ring-offset-2 focus-visible:border-green-500 sm:text-sm"
              type="text"
              name="team_name"
              id="team_name"
              placeholder="Rory's Hackers..."
            />
            <button
              onClick={() => setStep(2)}
              className="bg-white text-mgreen rounded-lg mt-4 py-1  font-bold"
            >
              Next
            </button>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className="flex flex-col  mx-3 pt-10 gap-3">
            <USA
              selected={usaSelected}
              handleSelect={handleSelect}
              setSelected={setUsaSelected}
            ></USA>
            <button
              onClick={() => setStep(3)}
              className="bg-ukraineyellow hover:bg-yellow-300 rounded-lg my-4 py-1 font-medium"
            >
              Next
            </button>
          </div>
        </>
      );

    default:
      return <div className="">The End</div>;
      break;
  }
};
//   return (
//     <div className="flex flex-col mx-3 pt-10 gap-6">
//       <Listbox value={selectedUSAOne} onChange={setSelectedUSAOne}>
//         <div className="relative">
//           <Listbox.Label className="font-bold text-sm text-slate-100 tracking-wide uppercase">
//             USA Player
//           </Listbox.Label>
//           <Listbox.Button className="mt-2 relative w-full py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-1 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-green-300 focus-visible:ring-offset-2 focus-visible:border-green-500 sm:text-sm">
//             <span className="block truncate">
//               {selectedUSAOne.last_name}, {selectedUSAOne.first_name}
//             </span>
//             <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//               <SelectorIcon
//                 className="w-5 h-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </span>
//           </Listbox.Button>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {usa.map((player, playerIdx) => (
//                 <Listbox.Option
//                   key={playerIdx}
//                   className={({ active }) =>
//                     `cursor-default select-none relative py-2 pl-10 pr-4 ${
//                       active ? 'text-green-900 bg-green-100' : 'text-gray-900'
//                     }`
//                   }
//                   value={player}
//                 >
//                   {({ selected }) => (
//                     <>
//                       <span
//                         className={`block truncate ${
//                           selected ? 'font-medium' : 'font-normal'
//                         }`}
//                       >
//                         {player.last_name}, {player.first_name}
//                       </span>
//                       {selected ? (
//                         <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-mgreen">
//                           <CheckIcon className="w-5 h-5" aria-hidden="true" />
//                         </span>
//                       ) : null}
//                     </>
//                   )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </Transition>
//         </div>
//       </Listbox>
//       {/* <select name="usaOne" id="usaOne">
//         {usa.map((player) => (
//           <option key={player.id} value={player.id}>
//             {player.last_name}, {player.first_name.slice(0, 1)}
//           </option>
//         ))}
//       </select> */}
//     </div>
//   );
// };

export default TeamInfo;
