import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


const initialState = {
    combined: [],
    worldRankings: [],
    entries: [],
    loading: true


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
            `https://golf-leaderboard-data.p.rapidapi.com/entry-list/294`,
            requestOptions
        );
        return res.data.results.entry_list
        //console.log(res);
        dispatch({
            type: 'GET_ENTRIES',
            payload: res.data.results.entry_list,
        });

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
        dispatch({
            type: 'GET_RANKINGS',
            payload: res.data.results.rankings,
        });

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
        console.log(data)

        dispatch({
            type: 'GET_COMBINED',
            payload: data,
        });

    }

    return (
        <GlobalContext.Provider
            value={{
                entries: state.entries,
                combined: state.combined,
                worldRankings: state.worldRankings,
                loading: state.loading,
                getCombined,
                getEntries,
                getRankings
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}