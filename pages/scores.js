import React, { useState, useEffect, useContext } from 'react'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { GlobalContext } from '../context/GlobalState'
import axios from 'axios'
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from '@heroicons/react/outline';
import { StarIcon as StarSolid } from '@heroicons/react/solid';



const scores = () => {
    const { getCombined, combined, picks, getTeams, getScoreData, scores } = useContext(GlobalContext);
    const [favs, setFavs] = useState([])
    const [showFavs, setShowFavs] = useState(false)
    const [show, setShow] = useState(null);
    const [temp, setTemp] = useState([])
    const tour = {
        "id": 456,
        "type": "Stroke Play",
        "tour_id": 2,
        "name": "Masters Tournament",
        "country": "Augusta, USA",
        "course": "Augusta National Golf Club",
        "start_date": "2022-04-07 00:00:00",
        "end_date": "2022-04-10 00:00:00",
        "timezone": "America/New_York",
        "prize_fund": "",
        "fund_currency": "USD",
        "live_details": ''
    }

    // filter through favs and return any ids from temp that match favs
    const favsgroup = temp.filter(function (item) {
        return favs.includes(item.id);
    });
    //console.log(favsgroup)


    const handleShow = (index) => {
        //  console.log(show)
        if (show != null) {
            // console.log(123)
            setShow(null)
        } else setShow(index)

    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (favs.length > 0) {
                localStorage.setItem('favs', JSON.stringify(favs));// all other localStorage must be wrapped with this is if statement check
            }
        } else {
            return
        }

    }, [favs]);
    useEffect(() => {
        getTeams()
        setTemp(picks)
        if (typeof window !== 'undefined') {
            const favs = JSON.parse(localStorage.getItem('favs'));
            if (favs) {
                setFavs(favs);
            }
        }

    }, []);

    useEffect(() => {
        setTemp(picks)
    }, [picks])

    //function that uses ths id of the player in picks to match the player in scores
    // const matchPlayer = (id) => {
    //     const player = scores.find(p => p.player_id === id)
    //     return player
    // }

    // function to get the sum of total_to_par for each player in picks
    const getTotalToPar = (arr) => {
        let total = 0;
        arr.forEach(player => {
            total += player.total_to_par
        })
        return total
    }

    const handleFav = (id) => {

        // check if id is in favs state
        if (favs.includes(id)) {

            // if it is, remove it
            const newFavs = favs.filter(fav => fav !== id)
            setFavs(newFavs)

        } else {
            // if it is not, add it
            setFavs([...favs, id])



        }


    }
    const handleSwitch = (type) => {
        if (type === 'favourites') {
            setShowFavs(true)
        } else {
            setShowFavs(false)
        }
    }

    //console.log(picks)



    return (
        <div className=" md:relative bg-base-100 card rounded-t-none shadow-2xl pb-6 -mx-4 ">
            <div className="relative pt-24 pb-2 shadow-xl overflow-hidden">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/masters-scene.webp"
                    alt="masters scene"
                />
                <div className="absolute inset-0 bg-green-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-mgreen via-mgreen opacity-70" />
                <div className="relative px-8 flex flex-col">
                    <div className="font-bold text-xl  text-ukraineyellow">{tour.name}</div>
                    <div className="font-bold text-md text-base-100 pb-2">{tour.course}</div>
                    <div className="text-xs text-gray-100">Updated 3mins ago</div>

                </div>
            </div>

            <div className="btn-group w-full">
                <button onClick={() => handleSwitch('leaderboard')} className={showFavs === false ? "btn btn-accent w-1/2  rounded-none" : 'btn  w-1/2 rounded-none'}>Leaderboard</button>
                <button onClick={() => handleSwitch('favourites')} className={showFavs === true ? "btn btn-accent w-1/2  rounded-none" : 'btn  w-1/2 rounded-none'}>Favourites</button>
            </div>

            {picks.length < 1 ? (
                <div className="h-80 flex justify-center items-center"><div className="lds-ripple"><div></div><div></div></div></div>
            ): (<div className='px-3'>
                <div className="flow-root mt-6">

                    <ul className="-my-5 divide-y divide-gray-300">


                        {favs && showFavs ? favsgroup.map((team, i) => (
                            <li key={team.id} className={show === i ? "py-4" : 'py-4'} onClick={() => {
                                handleShow(i)
                                setShow(i)
                            }}>
                                <div className="flex items-center space-x-4">
                                    {favs.includes(team.id) ? <StarSolid onClick={() => handleFav(team.id)} className='w-5'></StarSolid> : <StarIcon onClick={() => handleFav(team.id)} className='w-5'></StarIcon>}

                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{team.name}</p>
                                        {/* <p className="text-sm text-gray-500 truncate">{'@' + team.handle}</p> */}
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-ukraineyellow hover:bg-yellow-400"
                                        >
                                            {getTotalToPar(team.picks)}
                                        </a>
                                    </div>
                                </div>
                                {show != null && show === i && (
                                    <div className="flex justify-around w-full mt-1 overflow-x-scrol">{team.picks.map(p => (
                                        <div className="text-xs flex flex-col items-center" key={p.player_id}>
                                            <div className=""><img src={`/headshots/${p.player_id}.webp`} className='rounded-full w-12'></img></div>
                                            <div className="font-medium">{p.last_name}</div>
                                            <div className='text-sm font-bold'>{p.total_to_par}</div>

                                            <div className="text-[0.6rem]">{p.holes_played}</div>
                                        </div>
                                    ))}</div>
                                )}
                            </li>
                        )) : temp.map((team, i) => (
                            <li key={team.id} className={show === i ? "py-4" : 'py-4'} onClick={() => {
                                handleShow(i)
                                setShow(i)
                            }}>
                                <div className="flex items-center space-x-4">
                                    {favs.includes(team.id) ? <StarSolid onClick={() => handleFav(team.id)} className='w-5'></StarSolid> : <StarIcon onClick={() => handleFav(team.id)} className='w-5'></StarIcon>}

                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{team.name}</p>
                                        {/* <p className="text-sm text-gray-500 truncate">{'@' + team.handle}</p> */}
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-ukraineyellow hover:bg-yellow-400"
                                        >
                                            {getTotalToPar(team.picks)}
                                        </a>
                                    </div>
                                </div>
                                {show != null && show === i && (
                                    <div className="flex justify-around w-full mt-1 overflow-x-scrol">{team.picks.map(p => (
                                        <div className="text-xs flex flex-col items-center" key={p.player_id}>
                                            <div className=""><img src={`/headshots/${p.player_id}.webp`} className='rounded-full w-12'></img></div>
                                            <div className="font-medium">{p.last_name}</div>
                                            <div className='text-sm font-bold'>{p.total_to_par}</div>

                                            <div className="text-[0.6rem]">{p.holes_played}</div>
                                        </div>
                                    ))}</div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className="mt-6">
                    <a
                        href="#"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        View all
                    </a>
                </div> */}
            </div>)}
            
        </div >
    )
}

export default scores