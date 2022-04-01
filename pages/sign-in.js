import Image from 'next/image'
import React, { useState } from 'react'

import { supabase } from '../client'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    // function to sign the user in with supabase
    const handleSubmit = async () => {

        const { data, error } = await supabase.auth.signIn({ email })
        if (error) {
            setError(true)
        } else {
            setSubmitted(true)
        }


    }
    if (submitted) {
        return (
            <div className='flex flex-col gap-5 mt-4'>
                <div className="text-base-100 font-bold text-4xl">Thanks!</div>
                <div className="text-base-100 text-md tracking-wide leading-7">
                    Now just check your email for a link to sign in and enter!
                </div>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div className='order-last md:order-first'>
                <Image alt='masters scene' src='/masters-scene.webp' width={600} height={400} className="rounded-2xl"></Image>
            </div>
            <main className='flex flex-col gap-5 mt-4 max-w-lg'>
                <div className="text-base-100 font-bold text-4xl">Sign in</div>
                <div className="text-base-100 text-md tracking-wide leading-7">
                    Enter your email address to sign up. You will get an email with a link to sign in. One less password to remember!

                </div>
                <input className="input input-bordered w-full max-w-md" placeholder='Your email address...' type="email" name="" id="" onChange={e => setEmail(e.target.value)} />
                <button className='btn btn-accent w-full  max-w-md' onClick={() => handleSubmit()}>Sign In</button>
            </main>
        </div>
    )

}

export default SignIn