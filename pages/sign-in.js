import React, { useState } from 'react'

import { supabase } from '../client'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    // function to sign the user in with supabase
    const handleSubmit = async () => {

        const { data, error } = await supabase.auth.signIn({ email, data: { hello: name } })
        if (error) {
            setError(true)
        } else {
            setSubmitted(true)
        }


    }
    if (submitted) {
        return (
            <div className="text-xl">Please check your email to sign in</div>
        )
    }
    return (
        <div className="">
            <main>
                <h1>Sign In</h1>
                <input type="name" name="" id="" onChange={e => setName(e.target.value)} />
                <input type="email" name="" id="" onChange={e => setEmail(e.target.value)} />
                <button className='m-2.5' onClick={() => handleSubmit()}>Sign In</button>
            </main>
        </div>
    )

}

export default SignIn