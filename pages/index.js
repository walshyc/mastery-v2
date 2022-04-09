import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Scoreboard from '../components/Scoreboard';
import Moment from 'react-moment';
import { supabase } from '../client'


export default function Home({ user }) {
  const { picks, getTeams, updated } = useContext(GlobalContext);
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
    if (show === index) {
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

  // function to get the sum of total_to_par for each player in picks
  const getTotalToPar = (arr) => {
    let total = 0;
    arr.forEach(player => {
      total += player.total_to_par
    })
    return total
  }

  const handleFav = (e, id) => {
    e.stopPropagation()
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
    setShow(null)
  }


  return (
    <div className=" md:relative bg-base-100 card rounded-t-none lg:rounded-t-xl shadow-2xl pb-6 -mx-4 lg:mt-4">
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
          {updated && (<div className="text-xs text-gray-100 pb-4">Updated <Moment fromNow>{updated}</Moment></div>)}


        </div>
      </div>

      <div className="btn-group w-full">
        <button onClick={() => handleSwitch('leaderboard')} className={showFavs === false ? "btn btn-accent btn-sm w-1/2  rounded-none" : 'btn btn-sm  w-1/2 rounded-none'}>Leaderboard</button>
        <button onClick={() => handleSwitch('favourites')} className={showFavs === true ? "btn btn-accent btn-sm w-1/2  rounded-none" : 'btn btn-sm  w-1/2 rounded-none'}>Favourites</button>
      </div>

      {picks.length < 1 ? (
        <div className="h-80 flex justify-center items-center"><div className="lds-ripple"><div></div><div></div></div></div>
      ) : 
      (<div className='px-3 pt-2'>
        <div className="flow-root mt-6">

          <ul className="-my-5 divide-y divide-gray-300">
            {favs && showFavs ? (<Scoreboard scoredata={favsgroup} handleFav={handleFav} getTotalToPar={getTotalToPar} handleShow={handleShow} favs={favs} show={show} ></Scoreboard>)
              : (<Scoreboard scoredata={picks} handleFav={handleFav} getTotalToPar={getTotalToPar} handleShow={handleShow} favs={favs} show={show} ></Scoreboard>)}
          </ul>
        </div>
      </div>
      )}
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  // if (user) {
  //   return { props: { user }, redirect: { destination: '/' } }
  // }

  return { props: { user } }

}