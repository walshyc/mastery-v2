import React, { useState, useEffect, useContext } from 'react'
import { useCart } from 'react-use-cart'
import { supabase } from "../client"
import uuid from 'react-uuid'
import { newEntries } from '../entries'
import axios from 'axios';
import Router from "next/router";
import { XIcon } from '@heroicons/react/outline';
import SelectionsModal from '../components/SelectionsModal'
import TeamName from '../components/form/TeamName'
import Selections from '../components/form/Selections'
import { GlobalContext } from '../context/GlobalState'
import Tiebreaker from '../components/form/Tiebreaker'



const enter = ({ user }) => {
    const { getEntries, entries, getRankings, worldRankings } = useContext(GlobalContext);
    const { items, addItem } = useCart();
    const [selections, setSelections] = useState([])
    const [enabled, setEnabled] = useState(true)
    const [count, setCount] = useState(0)
    const [userID, setUserID] = useState(null)
    const [teamName, setTeamName] = useState('')
    const [tiebreaker, setTiebreaker] = useState('')
    const [step, setStep] = useState(1);


   
    const players = [
        {
            "player_id": 138154,
            "first_name": "Scottie",
            "last_name": "Scheffler",
            "country": "USA",
            "ranking": 1
        },
        {
            "player_id": 140926,
            "first_name": "Jon",
            "last_name": "Rahm",
            "country": "ESP",
            "ranking": 2
        },
        {
            "player_id": 151591,
            "first_name": "Collin",
            "last_name": "Morikawa",
            "country": "USA",
            "ranking": 3
        },
        {
            "player_id": 140167,
            "first_name": "Viktor",
            "last_name": "Hovland",
            "country": "NOR",
            "ranking": 4
        },
        {
            "player_id": 106366,
            "first_name": "Patrick",
            "last_name": "Cantlay",
            "country": "USA",
            "ranking": 5
        },
        {
            "player_id": 107689,
            "first_name": "Cameron",
            "last_name": "Smith",
            "country": "AUS",
            "ranking": 6
        },
        {
            "player_id": 100360,
            "first_name": "Justin",
            "last_name": "Thomas",
            "country": "USA",
            "ranking": 7
        },
        {
            "player_id": 92791,
            "first_name": "Dustin",
            "last_name": "Johnson",
            "country": "USA",
            "ranking": 8
        },
        {
            "player_id": 84727,
            "first_name": "Rory",
            "last_name": "McIlroy",
            "country": "NIR",
            "ranking": 9
        },
        {
            "player_id": 144259,
            "first_name": "Xander",
            "last_name": "Schauffele",
            "country": "USA",
            "ranking": 10
        },
        {
            "player_id": 142528,
            "first_name": "Sam",
            "last_name": "Burns",
            "country": "USA",
            "ranking": 11
        },
        {
            "player_id": 98533,
            "first_name": "Hideki",
            "last_name": "Matsuyama",
            "country": "JPN",
            "ranking": 12
        },
        {
            "player_id": 88276,
            "first_name": "Billy",
            "last_name": "Horschel",
            "country": "USA",
            "ranking": 13
        },
        {
            "player_id": 79003,
            "first_name": "Louis",
            "last_name": "Oosthuizen",
            "country": "RSA",
            "ranking": 14
        },
        {
            "player_id": 136594,
            "first_name": "Abraham",
            "last_name": "Ancer",
            "country": "MEX",
            "ranking": 15
        },
        {
            "player_id": 103105,
            "first_name": "Tyrrell",
            "last_name": "Hatton",
            "country": "ENG",
            "ranking": 16
        },
        {
            "player_id": 110083,
            "first_name": "Brooks",
            "last_name": "Koepka",
            "country": "USA",
            "ranking": 17
        },
        {
            "player_id": 102154,
            "first_name": "Jordan",
            "last_name": "Spieth",
            "country": "USA",
            "ranking": 18
        },
        {
            "player_id": 143893,
            "first_name": "Bryson",
            "last_name": "DeChambeau",
            "country": "USA",
            "ranking": 19
        },
        {
            "player_id": 136474,
            "first_name": "Joaquin",
            "last_name": "Niemann",
            "country": "CHI",
            "ranking": 20
        },
        {
            "player_id": 120094,
            "first_name": "Daniel",
            "last_name": "Berger",
            "country": "USA",
            "ranking": 21
        },
        {
            "player_id": 89191,
            "first_name": "Tony",
            "last_name": "Finau",
            "country": "USA",
            "ranking": 22
        },
        {
            "player_id": 120310,
            "first_name": "Matt",
            "last_name": "Fitzpatrick",
            "country": "ENG",
            "ranking": 24
        },
        {
            "player_id": 76108,
            "first_name": "Paul",
            "last_name": "Casey",
            "country": "ENG",
            "ranking": 25
        },
        {
            "player_id": 119929,
            "first_name": "Sungjae",
            "last_name": "Im",
            "country": "KOR",
            "ranking": 26
        },
        {
            "player_id": 88450,
            "first_name": "Kevin",
            "last_name": "Kisner",
            "country": "USA",
            "ranking": 27
        },
        {
            "player_id": 92848,
            "first_name": "Jason",
            "last_name": "Kokrak",
            "country": "USA",
            "ranking": 28
        },
        {
            "player_id": 142465,
            "first_name": "Will",
            "last_name": "Zalatoris",
            "country": "USA",
            "ranking": 29
        },
        {
            "player_id": 76204,
            "first_name": "Kevin",
            "last_name": "Na",
            "country": "USA",
            "ranking": 30
        },
        {
            "player_id": 103096,
            "first_name": "Patrick",
            "last_name": "Reed",
            "country": "USA",
            "ranking": 31
        },
        {
            "player_id": 120007,
            "first_name": "Corey",
            "last_name": "Conners",
            "country": "CAN",
            "ranking": 32
        },
        {
            "player_id": 99895,
            "first_name": "Thomas",
            "last_name": "Pieters",
            "country": "BEL",
            "ranking": 33
        },
        {
            "player_id": 139222,
            "first_name": "Talor",
            "last_name": "Gooch",
            "country": "USA",
            "ranking": 34
        },
        {
            "player_id": 99628,
            "first_name": "Shane",
            "last_name": "Lowry",
            "country": "IRL",
            "ranking": 35
        },
        {
            "player_id": 73522,
            "first_name": "Adam",
            "last_name": "Scott",
            "country": "AUS",
            "ranking": 36
        },
        {
            "player_id": 119947,
            "first_name": "Max",
            "last_name": "Homa",
            "country": "USA",
            "ranking": 37
        },
        {
            "player_id": 106612,
            "first_name": "Tom",
            "last_name": "Hoge",
            "country": "USA",
            "ranking": 38
        },
        {
            "player_id": 87679,
            "first_name": "Webb",
            "last_name": "Simpson",
            "country": "USA",
            "ranking": 39
        },
        {
            "player_id": 111583,
            "first_name": "Harold",
            "last_name": "Varner III",
            "country": "USA",
            "ranking": 40
        },
        {
            "player_id": 84772,
            "first_name": "Seamus",
            "last_name": "Power",
            "country": "IRL",
            "ranking": 41
        },
        {
            "player_id": 102310,
            "first_name": "Russell",
            "last_name": "Henley",
            "country": "USA",
            "ranking": 42
        },
        {
            "player_id": 80569,
            "first_name": "Marc",
            "last_name": "Leishman",
            "country": "AUS",
            "ranking": 43
        },
        {
            "player_id": 117190,
            "first_name": "Lucas",
            "last_name": "Herbert",
            "country": "AUS",
            "ranking": 44
        },
        {
            "player_id": 168850,
            "first_name": "Matthew",
            "last_name": "Wolff",
            "country": "USA",
            "ranking": 45
        },
        {
            "player_id": 172114,
            "first_name": "Cameron",
            "last_name": "Young",
            "country": "USA",
            "ranking": 46
        },
        {
            "player_id": 92749,
            "first_name": "Tommy",
            "last_name": "Fleetwood",
            "country": "ENG",
            "ranking": 47
        },
        {
            "player_id": 112381,
            "first_name": "Si Woo",
            "last_name": "Kim",
            "country": "KOR",
            "ranking": 49
        },
        {
            "player_id": 143767,
            "first_name": "Takumi",
            "last_name": "Kanaya",
            "country": "JPN",
            "ranking": 50
        },
        {
            "player_id": 63643,
            "first_name": "Sergio",
            "last_name": "Garcia",
            "country": "ESP",
            "ranking": 52
        },
        {
            "player_id": 82948,
            "first_name": "Brian",
            "last_name": "Harman",
            "country": "USA",
            "ranking": 53
        },
        {
            "player_id": 67231,
            "first_name": "Justin",
            "last_name": "Rose",
            "country": "ENG",
            "ranking": 56
        },
        {
            "player_id": 81403,
            "first_name": "Luke",
            "last_name": "List",
            "country": "USA",
            "ranking": 57
        },
        {
            "player_id": 106534,
            "first_name": "Mackenzie",
            "last_name": "Hughes",
            "country": "CAN",
            "ranking": 58
        },
        {
            "player_id": 112150,
            "first_name": "Min Woo",
            "last_name": "Lee",
            "country": "AUS",
            "ranking": 59
        },
        {
            "player_id": 136582,
            "first_name": "Christiaan",
            "last_name": "Bezuidenhout",
            "country": "RSA",
            "ranking": 63
        },
        {
            "player_id": 120034,
            "first_name": "Erik",
            "last_name": "van Rooyen",
            "country": "RSA",
            "ranking": 64
        },
        {
            "player_id": 61204,
            "first_name": "Lee",
            "last_name": "Westwood",
            "country": "ENG",
            "ranking": 65
        },
        {
            "player_id": 77428,
            "first_name": "Bubba",
            "last_name": "Watson",
            "country": "USA",
            "ranking": 68
        },
        {
            "player_id": 149896,
            "first_name": "Sepp",
            "last_name": "Straka",
            "country": "AUT",
            "ranking": 72
        },
        {
            "player_id": 60703,
            "first_name": "Stewart",
            "last_name": "Cink",
            "country": "USA",
            "ranking": 73
        },
        {
            "player_id": 156661,
            "first_name": "Robert",
            "last_name": "MacIntyre",
            "country": "SCO",
            "ranking": 74
        },
        {
            "player_id": 69976,
            "first_name": "Ryan",
            "last_name": "Palmer",
            "country": "USA",
            "ranking": 78
        },
        {
            "player_id": 102808,
            "first_name": "Hudson",
            "last_name": "Swafford",
            "country": "USA",
            "ranking": 79
        },
        {
            "player_id": 98389,
            "first_name": "K.H.",
            "last_name": "Lee",
            "country": "KOR",
            "ranking": 80
        },
        {
            "player_id": 163279,
            "first_name": "Garrick",
            "last_name": "Higgo",
            "country": "RSA",
            "ranking": 85
        },
        {
            "player_id": 93985,
            "first_name": "Gary",
            "last_name": "Woodland",
            "country": "USA",
            "ranking": 90
        },
        {
            "player_id": 135487,
            "first_name": "Cam",
            "last_name": "Davis",
            "country": "AUS",
            "ranking": 96
        },
        {
            "player_id": 117988,
            "first_name": "J.J.",
            "last_name": "Spaun",
            "country": "USA",
            "ranking": 103
        },
        {
            "player_id": 77716,
            "first_name": "Lucas",
            "last_name": "Glover",
            "country": "USA",
            "ranking": 105
        },
        {
            "player_id": 119518,
            "first_name": "Guido",
            "last_name": "Migliozzi",
            "country": "ITA",
            "ranking": 129
        },
        {
            "player_id": 157132,
            "first_name": "Cameron",
            "last_name": "Champ",
            "country": "USA",
            "ranking": 133
        },
        {
            "player_id": 62314,
            "first_name": "Padraig",
            "last_name": "Harrington",
            "country": "IRL",
            "ranking": 148
        },
        {
            "player_id": 96433,
            "first_name": "Danny",
            "last_name": "Willett",
            "country": "ENG",
            "ranking": 161
        },
        {
            "player_id": 100807,
            "first_name": "Harry",
            "last_name": "Higgs",
            "country": "USA",
            "ranking": 162
        },
        {
            "player_id": 79009,
            "first_name": "Charl",
            "last_name": "Schwartzel",
            "country": "RSA",
            "ranking": 172
        },
        {
            "player_id": 75610,
            "first_name": "Francesco",
            "last_name": "Molinari",
            "country": "ITA",
            "ranking": 185
        },
        {
            "player_id": 72088,
            "first_name": "Zach",
            "last_name": "Johnson",
            "country": "USA",
            "ranking": 213
        },
        {
            "player_id": 147700,
            "first_name": "Keita",
            "last_name": "Nakajima",
            "country": "JPN",
            "ranking": 239
        },
        {
            "player_id": 26395,
            "first_name": "Tiger",
            "last_name": "Woods",
            "country": "USA",
            "ranking": 973
        },
        {
            "player_id": 31285,
            "first_name": "Mike",
            "last_name": "Weir",
            "country": "CAN",
            "ranking": 988
        },
        {
            "player_id": 5014,
            "first_name": "Bernhard",
            "last_name": "Langer",
            "country": "GER",
            "ranking": 995
        },
        {
            "player_id": 3694,
            "first_name": "Fred",
            "last_name": "Couples",
            "country": "USA",
            "ranking": 999
        },
        {
            "player_id": 183445,
            "first_name": "Austin",
            "last_name": "Greaser",
            "country": "USA",
            "ranking": 999
        },
        {
            "player_id": 154774,
            "first_name": "Stewart",
            "last_name": "Hagestad",
            "country": "USA",
            "ranking": 999
        },
        {
            "player_id": 184696,
            "first_name": "Aaron",
            "last_name": "Jarvis",
            "country": "CMA",
            "ranking": 999
        },
        {
            "player_id": 5167,
            "first_name": "Sandy",
            "last_name": "Lyle",
            "country": "SCO",
            "ranking": 999
        },
        {
            "player_id": 5485,
            "first_name": "Larry",
            "last_name": "Mize",
            "country": "USA",
            "ranking": 999
        },
        {
            "player_id": 19135,
            "first_name": "José María",
            "last_name": "Olazábal",
            "country": "ESP",
            "ranking": 999
        },
        {
            "player_id": 177508,
            "first_name": "James",
            "last_name": "Piot",
            "country": "USA",
            "ranking": 999
        },
        {
            "player_id": 181129,
            "first_name": "Laird",
            "last_name": "Shepherd",
            "country": "ENG",
            "ranking": 999
        },
        {
            "player_id": 19717,
            "first_name": "Vijay",
            "last_name": "Singh",
            "country": "FIJ",
            "ranking": 999
        }
    ]

    const product = {
        id: uuid(),
        name: teamName,
        selections: selections,
        price: 1000,
        tiebreaker: tiebreaker
    };

    const handleAddTeam = () => {
        addItem(product);
        setSelections([])
        setCount(0)
        setStep(1);
        Router.push("/cart")
        //  console.log(items)
    }

    // create function that sends team_name and selections to /_add_team api endpoint
    const handleSubmit = async () => {


        await axios.post(
            '/api/add_team',
            {
                team_name: teamName, selections, user_id: user.id
            }
        );

        Router.push("/enter")
    }


    const handleSelect = (player) => {

        if (count < 5 && !selections.some(select => select.player_id === player.player_id)) {
            setSelections(prevSelections => [...prevSelections, player])
            setCount(count + 1)
        } else if (selections.some(select => select.player_id === player.player_id)) {
            setSelections(selections.filter(item => item.player_id !== player.player_id))
            setCount(count - 1)
        }
    }

    const checkSelected = id => {
        return selections.some(select => select.player_id === id) ? true : false
    }
    const handleRemove = (e, player) => {
        e.stopPropagation()
        setSelections(selections.filter(item => item.player_id !== player.player_id))
        setCount(count - 1)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    // sort new entries by ranking
    const sortedEntries = newEntries.sort((a, b) => {
        return a.ranking - b.ranking
    })


    // function that returns the total ranking of the selections
    function getTotalRanking(selections) {
        let totalRanking = 0;
        selections.forEach((selection) => {
            totalRanking += selection.ranking;
        });
        return totalRanking;
    }
    const showButton = () => {
        if (selections.length === 5 && getTotalRanking(selections) > 199) {
            return (
                <button
                    onClick={() => setStep(3)}
                    className=" btn  btn-accent"
                >
                    Continue
                </button>
            );
        } else if (selections.length < 5) {
            return (
                <button
                    className=" btn btn-accent"
                >
                    You need 5 Selections
                </button>
            );
        } else {
            return (
                <button
                    className=" btn btn-accent"
                >
                    Total Ranking needs to be over 200
                </button>
            );
        }
    };


    // newEntries.sort((a, b) => (parseInt(a.ranking) - parseInt(b.ranking) ? 1 : -1))
    // console.log(newEntries)

    switch (step) {
        case 1:
            return (
                <TeamName teamName={teamName} setTeamName={setTeamName} setStep={setStep}></TeamName>

            )
        case 2:
            return (
                <Selections setStep={setStep} showButton={showButton} teamName={teamName} selections={selections} entries={players} checkSelected={checkSelected} handleSelect={handleSelect} handleRemove={handleRemove}></Selections>
            )
        case 3:
            return (<Tiebreaker teamName={teamName} selections={selections} tiebreaker={tiebreaker} setTiebreaker={setTiebreaker} setStep={setStep} handleAddTeam={handleAddTeam}></Tiebreaker>)



        default:
            return (
                <div className="">Team entered</div>
            )
            break;
    }


}

export const getServerSideProps = async ({ req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    if (!user) {
        return { props: {}, redirect: { destination: '/sign-in' } }
    }

    return { props: { user } }

}

export default enter