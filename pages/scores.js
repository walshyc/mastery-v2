import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import axios from 'axios'
import Image from 'next/image';


const scores = () => {
    const { getCombined, combined, picks, getTeams, getScoreData, matchPlayer } = useContext(GlobalContext);


    useEffect(() => {
        getCombined()
        getTeams()
        getScoreData()

    }, [])

    return (
        <div className=" md:relative mt-8 bg-base-100 card  shadow-2xl p-3">
            {picks.map((p, index) => {
                return (
                    <div key={index} className="px-4 py-2"><div className="card-title ml-3">{p.team_name}</div>
                        {p.picks.map(sel => (
                            <div key={sel.id} className="flex gap-4">
                                <pre>{JSON.stringify(matchPlayer(82963), null, 2)}</pre>
                                <Image
                                    src={`/flags/${sel.country}.svg`}
                                    width={30}
                                    height={20}
                                    alt={`${sel.country} flag`}
                                ></Image>
                                {/* <ChevronRightIcon className='w-3 mr-2'></ChevronRightIcon> */}
                                <div className="text-lg grow font-bold">
                                    {sel.last_name}{' '}
                                    <span className="font-light text-sm">{sel.first_name}</span>
                                </div>
                                <div className="">{sel.ranking}</div>
                            </div>
                        ))}

                    </div>
                );
            })}
        </div>
    )
}

export default scores