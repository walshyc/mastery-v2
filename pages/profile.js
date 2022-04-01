import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useRouter } from 'next/dist/client/router'
import { ChevronRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';


const profile = () => {
    const [profile, setProfile] = useState(null)
    const [name, setName] = useState('')
    const [teams, setTeams] = useState([])
    const router = useRouter()

    useEffect(() => {
        fetchProfile()
        //fetchTeams()

    }, [])
    const handleUpdate = async () => {

        const { user, error } = await supabase.auth.update({

            data: { name: name }
        })


    }

    const fetchProfile = async () => {
        const profileData = await supabase.auth.user()
        if (!profileData) {
            router.push('/sign-in')
        } else {

            setProfile(profileData)
            const { data } = await supabase
                .from('selections')
                .select("*")
                .eq('user_id', profileData.id)

            setTeams(data)
        }
    }

    const fetchTeams = async () => {
        console.log(profile)
        //console.log(profile.id)
        const { data } = await supabase
            .from('selections')
            .select("*")
            .eq('user_id', '453b8e48-553f-453b-a8e7-c7d1f39754bc')
        console.log(data)
        setTeams(data)
    }

    // function to sign out the user
    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/sign-in')
    }

    console.log(teams)

    if (!profile) return null;
    if (!teams) return (<div><div className="btn btn-accent" onClick={() => handleSignOut()}>Sign out</div></div>)

    return (
        <div className="flex flex-col mx-3 pt-10 gap-5">
            <div className="text-base-100 font-bold text-2xl">Hi {profile.email}</div>
            <div className="text-base-100 text-md tracking-wide">
                Here&apos;s a list of the teams you have entered so far!
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {teams.map((team, index) => {
                    return (
                        <div className="bg-base-200 card shadow-2xl" key={index}>
                            <div className="card-body">


                                <div className="card-title">{team.team_name}</div>
                                {
                                    team.picks.map(p => (
                                        <div key={p.player_id} className="flex gap-4">
                                            <Image src={`/flags/${p.country}.svg`} width={30} height={20}></Image>
                                            {/* <ChevronRightIcon className='w-3 mr-2'></ChevronRightIcon> */}
                                            <div className="text-lg">{p.last_name} <span className='font-light text-sm'>{p.first_name}</span></div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })}
                <div className="btn btn-accent" onClick={() => handleSignOut()}>Sign out</div>
                {/* <pre>{JSON.stringify(teams, null, 2)}</pre> */}

            </div>
        </div>
    )


}

export default profile