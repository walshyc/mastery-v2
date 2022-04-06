import React from 'react';
import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as StarSolid } from '@heroicons/react/solid';

const Scoreboard = ({
  scoredata,
  handleFav,
  getTotalToPar,
  handleShow,
  favs,
  show,
}) => {
  return scoredata.map((team, i) => (
    <li
      key={team.id}
      className={show === i ? 'py-3 cursor-pointer' : 'py-3 cursor-pointer'}
      onClick={() => {
        handleShow(i);
      }}
    >
      <div className="flex items-center space-x-4">
        {favs.includes(team.id) ? (
          <StarSolid
            onClick={(e) => handleFav(e, team.id)}
            className="w-5 text-mgreen"
          ></StarSolid>
        ) : (
          <StarIcon
            onClick={(e) => handleFav(e, team.id)}
            className="w-5 text-gray-500"
          ></StarIcon>
        )}

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {team.name}
          </p>
          {/* <p className="text-sm text-gray-500 truncate">{'@' + team.handle}</p> */}
        </div>
        <div>
          <div className="badge badge-accent p-3 mr-6 font-bold">
            {getTotalToPar(team.picks)}
          </div>
        </div>
      </div>
      {show != null && show === i && (
        <div className="flex justify-around w-full mt-1 overflow-x-scrol">
          {team.picks.map((p) => (
            <div
              className="text-xs flex flex-col items-center"
              key={p.player_id}
            >
              <div className="">
                <img
                  src={`/headshots/${p.player_id}.webp`}
                  className="rounded-full w-12"
                ></img>
              </div>
              <div className="font-medium select-none">{p.last_name}</div>
              <div className="text-sm font-bold select-none">
                {p.total_to_par}
              </div>

              <div className="text-[0.6rem] select-none">{p.holes_played}</div>
            </div>
          ))}
        </div>
      )}
    </li>
  ));
};

export default Scoreboard;
