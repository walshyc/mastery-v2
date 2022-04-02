import React, { useState, useEffect } from 'react'
import axios from 'axios'

const scores = () => {
    const [entries, setEntries] = useState([])
    useEffect(() => {
        const getEntries = async () => {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                    'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
                },
            };

            const { data: { results: { entry_list }
            }
            } = await axios.get(
                `https://golf-leaderboard-data.p.rapidapi.com/entry-list/386`,
                requestOptions
            );
            console.log(entry_list);
            setEntries(entry_list)
        }

        getEntries()
        console.log(entries)
    }, [])

    return (
        <div>scores</div>
    )
}

export default scores