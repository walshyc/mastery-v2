import React, { useState, useEffect } from 'react'
import { useCart } from 'react-use-cart'
import { supabase } from "../client"
import uuid from 'react-uuid'
import { newEntries, combined } from '../entries'
import Image from 'next/image';
import axios from 'axios';
import Router from "next/router";
import { XIcon } from '@heroicons/react/outline';
import SelectionsModal from '../components/SelectionsModal'
import TeamName from '../components/form/TeamName'
import Selections from '../components/form/Selections'


const enter = ({ user }) => {
    const { items, addItem } = useCart();
    const [selections, setSelections] = useState([])
    const [enabled, setEnabled] = useState(true)
    const [count, setCount] = useState(0)
    const [userID, setUserID] = useState(null)
    const [teamName, setTeamName] = useState(null)
    const [step, setStep] = useState(1);

    useEffect(() => {
        console.log(items)
    }, [items])


    const product = {
        id: uuid(),
        name: teamName,
        selections: selections,
        price: 1000,
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
                    onClick={() => handleAddTeam()}
                    className=" btn  btn-accent max-w-md"
                >
                    Continue
                </button>
            );
        } else if (selections.length < 5) {
            return (
                <button
                    className=" btn btn-accent max-w-md"
                >
                    Not enough Selections
                </button>
            );
        } else {
            return (
                <button
                    className=" btn btn-accent max-w-md"
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
                <TeamName setTeamName={setTeamName} setStep={setStep}></TeamName>

            )
        case 2:
            return (
                <Selections showButton={showButton} teamName={teamName} selections={selections} entries={newEntries} checkSelected={checkSelected} handleSelect={handleSelect} handleRemove={handleRemove}></Selections>
            )



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