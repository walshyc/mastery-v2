import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import { supabase } from '../client';


const initialState = {
    combined: [],
    worldRankings: [],
    entries: [],
    loading: true,
    picks: [],
    lads: [],
    scores: [],
    updated: undefined

};

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getEntries = async () => {
        // setLoading();
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        const res = await axios.get(
            `https://golf-leaderboard-data.p.rapidapi.com/entry-list/456`,
            requestOptions
        );
        return res.data.results.entry_list


    };
    const getRankings = async () => {
        // setLoading();
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        const res = await axios.get(
            `https://golf-leaderboard-data.p.rapidapi.com/world-rankings`,
            requestOptions
        );
        return res.data.results.rankings

    };

    const getCombined = async () => {
        const entries = await getEntries()
        const worldRankings = await getRankings()
        const data = entries.map(player => {
            const ranking = worldRankings.find(r => r.player_id === player.player_id);
            if (ranking) {

                return {
                    ...player,
                    ranking: ranking.position
                }
            } else {
                return { ...player, ranking: 999 }
            }

        })

        data.sort((a, b) => {
            return a.ranking - b.ranking
        })


        dispatch({
            type: 'GET_COMBINED',
            payload: data,
        });

    }

    const getTeams = async () => {
        let { data: selections, error } = await supabase
            .from('selections')
            .select('*')

        //console.log(selections.sort((a, b) => a.id - b.id))
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        const res = await axios.get(
            `https://golf-leaderboard-data.p.rapidapi.com/leaderboard/456`,
            requestOptions
        );

        const leaderboard = res.data.results.leaderboard
        const updated = res.data.results.tournament.live_details.updated
        const getTotalToPar = (arr) => {
            let total = 0;
            arr.forEach(player => {
                if (player.status == 'cut') {
                    total = total + player.total_to_par + 5 + 72;
                } else if (player.status == 'wd') {
                    total = total + player.total_to_par + 5
                }
                else {
                    total += player.total_to_par
                }
            })
            return total
        }

        // const position = (place, equals) => {
        //     const joint = equals ? '=' : '';
        //     if (place.toString().endsWith(1) && !place.toString().endsWith(11)) return `${place}st${joint}`;
        //     if (place.toString().endsWith(2)) return `${place}nd${joint}`;
        //     if (place.toString().endsWith(3)) return `${place}rd${joint}`;

        //     return `${place}th${joint}`
        // }

        const formatted = selections.map(s => {
            const matchPlayer = (id) => {
                let player = leaderboard.find(p => p.player_id === id)
                return player
            }

            // loop over s picks and use reduce to sum
            const total = s.picks.reduce((acc, curr) => {


                return acc + curr.player_id
            }, 0)


            return {
                id: s.id, name: s.team_name, tiebreaker: s.tiebreaker, picks: s.picks.map(sel => matchPlayer(sel.player_id)), total: total, total_to_par: getTotalToPar(s.picks.map(sel => matchPlayer(sel.player_id)))
            }
        })
        formatted.sort((a, b) => {
            return a.total_to_par - b.total_to_par
        })


        let position = 0;
        for (const [index, standing] of formatted.entries()) {
            const eqPrev = index > 0 && formatted[index - 1].total_to_par === standing.total_to_par;
            const eqNext = index < formatted.length - 1 && formatted[index + 1].total_to_par === standing.total_to_par;

            if (!eqPrev) position = index + 1;

            standing.position = ((eqPrev || eqNext) ? "" : "") + position;
        }



        // check if any objects in formatted have the same total value
        const checkDuplicates = (arr) => {

            let dupes = []
            arr.forEach(obj => {
                if (arr.filter(o => o.total === obj.total).length > 1) {
                    dupes.push(obj)
                }
            })
            return dupes
        }

        //console.log(checkDuplicates(formatted))

 

        // console.log(formatted.sort((a, b) => b.total - a.total))

        dispatch({
            type: 'GET_TEAMS',
            payload: { data: formatted, updated: updated },
        });
    }
    const getLadsTeams = async () => {
        let { data: selections, error } = await supabase
            .from('selections')
            .select('*')

        //console.log(selections.sort((a, b) => a.id - b.id))
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        const res = await axios.get(
            `https://golf-leaderboard-data.p.rapidapi.com/leaderboard/456`,
            requestOptions
        );

        const leaderboard = res.data.results.leaderboard
        const updated = res.data.results.tournament.live_details.updated
        // const getTotalToPar = (arr) => {
        //     let total = 0;
        //     arr.forEach(player => {
        //         if (player.status == 'wd') {
        //             total = player.total_to_par + 5;
        //         } else {
        //             total += player.total_to_par
        //         }
        //     })
        //     return total
        // }

        const getTotalToPar = (arr) => {
            let total = 0;
            arr.forEach(player => {
                if (player.status == 'cut') {
                    total = total + player.total_to_par + 5 + 72;
                } else if (player.status == 'wd') {
                    total = total + player.total_to_par + 5
                }
                else {
                    total += player.total_to_par
                }
            })
            return total
        }

        // const position = (place, equals) => {
        //     const joint = equals ? '=' : '';
        //     if (place.toString().endsWith(1) && !place.toString().endsWith(11)) return `${place}st${joint}`;
        //     if (place.toString().endsWith(2)) return `${place}nd${joint}`;
        //     if (place.toString().endsWith(3)) return `${place}rd${joint}`;

        //     return `${place}th${joint}`
        // }

        const formatted = selections.map(s => {
            const matchPlayer = (id) => {
                const player = leaderboard.find(p => p.player_id === id)

                return player
            }

            // loop over s picks and use reduce to sum
            const total = s.picks.reduce((acc, curr) => {


                return acc + curr.player_id
            }, 0)


            return {
                id: s.id, name: s.team_name, lads: s.lads, tiebreaker: s.tiebreaker, picks: s.picks.map(sel => matchPlayer(sel.player_id)), total: total, total_to_par: getTotalToPar(s.picks.map(sel => matchPlayer(sel.player_id)))
            }
        }).filter(sel => sel.lads)
        formatted.sort((a, b) => {
            return a.total_to_par - b.total_to_par
        })


        let position = 0;
        for (const [index, standing] of formatted.entries()) {
            const eqPrev = index > 0 && formatted[index - 1].total_to_par === standing.total_to_par;
            const eqNext = index < formatted.length - 1 && formatted[index + 1].total_to_par === standing.total_to_par;

            if (!eqPrev) position = index + 1;

            standing.position = ((eqPrev || eqNext) ? "" : "") + position;
        }


        dispatch({
            type: 'GET_LADS_TEAMS',
            payload: formatted
        });
    }

    const getScoreData = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        const res = await axios.get(
            `https://golf-leaderboard-data.p.rapidapi.com/leaderboard/386`,
            requestOptions
        );
        console.log(res.data.results.leaderboard)
        dispatch({
            type: 'GET_LEADERBOARD',
            payload: res.data.results.leaderboard,
        });
    }





    const getPlayer = async (id) => {

    }

    return (
        <GlobalContext.Provider
            value={{
                entries: state.entries,
                combined: state.combined,
                worldRankings: state.worldRankings,
                loading: state.loading,
                picks: state.picks,
                scores: state.scores,
                lads: state.lads,
                updated: state.updated,
                getLadsTeams,
                getTeams,
                getCombined,
                getEntries,
                getRankings,
                getScoreData
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}