import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useRouter } from 'next/dist/client/router'

const profile = () => {
    const [profile, setProfile] = useState(null)
    const [name, setName] = useState('')
    const router = useRouter()

    useEffect(() => {
        fetchProfile()

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
        }
    }

    // function to sign out the user
    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/sign-in')
    }



    if (!profile) return null;

    return (
        <div className="max-w-xl mx-auto">
            <h2>Hello, {profile.email}</h2>
            <div className="">User id: {profile.id}</div>
            <h1>Sign In</h1>
            <input type="name" name="" id="" onChange={e => setName(e.target.value)} placeholder='name' />
            <button className='m-2.5' onClick={() => handleUpdate()}>Update</button>

            <button onClick={handleSignOut}>Sign out</button>
        </div >
    )


}

export default profile