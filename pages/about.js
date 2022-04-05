import React, { useState } from 'react'
import Image from 'next/image'
import { supabase } from '../client'


const about = () => {
    const [submitted, setSubmitted] = useState(false)
    const [email, setEmail] = useState('')
    // function to sign the user in with supabase
    const handleSubmit = async () => {

        const { error } = await supabase.auth.signIn({ email })
        if (error) {
            setError(true)
        } else {
            setSubmitted(true)
        }


    }

    if (submitted) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                <div className='order-2 md:order-first'>

                    <Image alt='golfer celebrating' src='/tiger.webp' width={600} height={400} className="rounded-2xl"></Image>
                </div>
                <div className='order-1 flex flex-col gap-5 mt-4 max-w-lg'>
                    <div className="text-base-100 font-bold text-4xl">Thanks! </div>
                    <div className="text-base-100 text-md tracking-wide leading-7">
                        Now just check your email for a link to sign in and enter!
                    </div>


                </div >
                <div className="order-3 bg-gray-100 my-3 p-3 rounded-lg text-base shadow-md text-gray-100 sm:my-5 sm:text-xl lg:text-lg xl:text-xl">
                    <div className="flex gap-4">
                        <Image alt='ukraine flag' src='/flags/UKR.svg' width={100} height={30}></Image>
                        <div className="text-ukraineblue font-medium tracking-wider">All profits donated to the <span className='text-mred font-medium'>Irish Red Cross Ukraine Crisis Appeal.</span> </div>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div className='order-last md:order-first'>
                <Image alt='masters scene' src='/masters-scene.webp' width={600} height={400} className="rounded-2xl"></Image>
            </div>
            <main className='flex flex-col gap-5 mt-4 max-w-lg'>
                <div className="text-base-100 font-bold text-4xl">About</div>
                <div tabIndex="0" className="collapse bg-accent collapse-plus border border-base-300  rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How to Enter?
                    </div>
                    <div className="collapse-content">
                        <p className=' leading-8 py-1'>You can add a team by entering your email to sign up below. You will instantly receive an email which you can use to login easily with no password.</p>
                        <p className=' leading-8 py-1'>Your entry comprises of any 5 golfers. Each golfer has a World Ranking, your teams total World Ranking needs to be 200 or more! </p>
                        <p className=' leading-8 py-1'>If any of your golfer&apos;s miss the cut or withdraws from the event they remain on their final score with a 5 shot penalty added to their score. </p>

                    </div>
                </div>
                <div tabIndex="1" className="collapse bg-accent  collapse-plus border border-base-300  rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How much does it cost?
                    </div>
                    <div className="collapse-content">
                        <p className=' leading-8'>Each team costs €10 or you can enter 3 teams for €20. All proceeds after the prizes have been paid out will be donated to the Irish Red Cross Ukraine Crisis Appeal.</p>
                    </div>
                </div>
                <div tabIndex="1" className="collapse bg-accent  collapse-plus border border-base-300  rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the Prizes?
                    </div>
                    <div className="collapse-content">
                        <p className=' leading-8'>The prizes are:</p>
                        <p className=' leading-8'>1st €175</p>
                        <p className=' leading-8'>2nd €50</p>
                        <p className=' leading-8'>3rd €25</p>
                    </div>
                </div>
                <div tabIndex="0" className="collapse bg-accent  collapse-plus border border-base-300  rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Tiebreaker
                    </div>
                    <div className="collapse-content">
                        <p className=' leading-8'>In the event of 2 or more teams being level, the team with the highest world
                            ranking will be determined the winner, if the total workd ranking is level, then the tiebreaker question will be used </p>
                        <p className=' leading-8'>The tiebreaker question requires you to guess the total number of birdies scored on the final round for all players.</p>

                    </div>
                </div>
                <div tabIndex="0" className="collapse bg-accent  collapse-plus border border-base-300  rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Can I see how I am doing?
                    </div>
                    <div className="collapse-content">
                        <p className=' leading-8'>Once entries close at 1pm on Thursday 7th April, there will be a live leaderboard on display throughout the event.</p>
                    </div>
                </div>
                <div tabIndex="0" className="collapse bg-accent  collapse-plus border border-base-300  rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Tiebreaker
                    </div>
                    <div className="collapse-content">
                        <p className=' leading-8'>In the event of 2 or more teams being level, the team with the highest world
                            ranking will be determined the winner, if the total workd ranking is level, then the tiebreaker question will be used </p>
                        <p className=' leading-8'>The tiebreaker question requires you to guess the total number of birdies scored on the final round for all players.</p>

                    </div>
                </div>
                <div className="text-base-100 text-md tracking-wide leading-7">
                    Enter your email address to sign up. You will get an email with a link to sign up and enter. One less password to remember!
                </div>
                <input className="input input-bordered w-full max-w-lg" placeholder='Your email address...' type="email" autoComplete='email' name="" id="" onChange={e => setEmail(e.target.value)} />
                <div className="flex  gap-5">
                    <button className='btn btn-accent grow ' onClick={() => handleSubmit()}>Sign Up</button>


                </div>
            </main>
        </div>
    )
}

export default about