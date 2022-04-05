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
    scores: []

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
        console.log(res.data)
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

    const getTeams = async () => {
        let { data: selections, error } = await supabase
            .from('selections')
            .select('*')

        dispatch({
            type: 'GET_TEAMS',
            payload: selections,
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

    const matchPlayer = (id) => {
        const player = state.scores.find(p => p.player_id === id)
        return player
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
                getTeams,
                getCombined,
                getEntries,
                getRankings,
                matchPlayer,
                getScoreData
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}