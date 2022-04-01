import Head from 'next/head'
import Image from 'next/image'
import { entries } from '../entries'
import { useState } from 'react'
import { supabase } from '../client'
import _ from "lodash";

export default function Home() {
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
    <div >
      <Head>
        <title>Mastery 2022 - Ukraine Fundraiser</title>
        <meta name="description" content="Mastery 2022 - fantasy golf competition for the 2022 Masters Golf. All profits donated to the Irish Red Cross Ukarine Appeal" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

      </Head>
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10 mt-8">
        <div className='order-last lg:order-first flex items-center'>
          <Image alt='masters scene' src='/masters-scene.webp' width={600} height={400} className="rounded-2xl"></Image>
        </div>
        <main className='flex flex-col gap-5 mt-4 max-w-lg'>
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-gray-200 sm:text-base lg:text-sm xl:text-base">
              Masters 2022
            </span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-gray-100">A Tradition Unlike</span>
              <span className="block text-ukraineyellow">Any Other</span>
            </span>
          </h1>
          <div className="text-base-100 text-md tracking-wide leading-7">
            Enter your email address to sign up. You will get an email with a link to sign up and enter. One less password to remember!

          </div>
          <div className=" bg-gray-100 my-3 p-3 rounded-lg text-base text-gray-100 sm:my-5 sm:text-xl lg:text-lg xl:text-xl">
            <div className="flex gap-4">
              <Image alt='ukraine flag' src='/flags/UKR.svg' width={100} height={30}></Image>
              <div className="text-ukraineblue font-medium tracking-wider">All profits donated to the <span className='text-mred font-medium'>Irish Red Cross Ukraine Crisis Appeal.</span> </div>
            </div>
          </div>
          <input className="input input-bordered w-full max-w-lg" placeholder='Your email address...' type="email" name="" id="" onChange={e => setEmail(e.target.value)} />
          <button className='btn btn-accent w-full  max-w-lg' onClick={() => handleSubmit()}>Sign Up</button>
        </main>
      </div>
    </div>
  )
}
