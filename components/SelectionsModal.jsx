import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import clsx from 'clsx';
import { ClipboardListIcon } from '@heroicons/react/outline';

const SelectionsModal = ({ teamName, selections }) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // function that returns the total ranking of the selections
  function getTotalRanking(selections) {
    let totalRanking = 0;
    selections.forEach((selection) => {
      totalRanking += selection.ranking;
    });
    return totalRanking;
  }
  return (
    <>
      <div className="fixed bottom-5 right-2 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex gap-2 px-4 py-2 text-sm font-medium text-black border border-black shadow-2xl bg-ukraineyellow rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <ClipboardListIcon className="w-5"></ClipboardListIcon>
          Your Selections
        </button>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        as="div"
        className={clsx(
          'fixed inset-0 z-10 overflow-y-auto flex justify-center items-center',
          {
            'bg-green-900/60': isOpen === true,
          }
        )}
      >
        <Dialog.Overlay className="fixed inset-0" />
        <div className="flex flex-col bg-gray-800 items-center text-white w-96 py-8 px-4 rounded-lg">
          <Dialog.Title className="text-white font-bold text-3xl mb-4 flex flex-col">
            <div className="text-xs font-normal">Name</div>
            <div className="">{teamName}</div>
          </Dialog.Title>
          {/* <Dialog.Description className="text-xl m-2">
            This will permanently deactivate your account
          </Dialog.Description> */}
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
              {getTotalRanking(selections) >= 150 ? (
                <div className="font-bold text-right text-xl bg-mgreen p-2 rounded-lg">
                  {getTotalRanking(selections)}/150
                </div>
              ) : (
                <div className="font-bold text-right text-xl  bg-red-300 p-2 rounded-lg">
                  {getTotalRanking(selections)}/150
                </div>
              )}
            </div>
          </div>

          {/* <p className="text-md m-4">
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p> */}

          <button
            className="m-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default SelectionsModal;
