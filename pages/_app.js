import '../styles/globals.css'
import Head from "next/head";
import { GlobalProvider } from '../context/GlobalState';
import { useState, useEffect } from 'react'
import { CartProvider } from 'react-use-cart';
import { supabase } from '../client'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [authenticatedState, setAuthenticatedState] = useState('not-authenticated')
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session)
      if (event === 'SIGNED_IN') {
        setAuthenticatedState('authenticated')
        router.push('/enter')
      }
      if (event === 'SIGNED_OUT') {
        setAuthenticatedState('not-authenticated')
      }
    })
    checkUser()
    return () => {
      authListener.unsubscribe()
    }
  }, [])
  async function checkUser() {
    const user = await supabase.auth.user()
    if (user) {
      setAuthenticatedState('authenticated')
    }
  }
  async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    })
  }



  return (
    <GlobalProvider>
      <CartProvider>
        <Head>
          <title>Mastery 2022 - Ukraine Fundraiser</title>
          <meta name="description" content="Mastery 2022 - fantasy golf competition for the 2022 Masters Golf. All profits donated to the Irish Red Cross Ukarine Appeal" />
          <meta charset='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <link rel="manifest" href="/manifest.json" />
          <link href="/favicon.ico" rel='icon' sizes='16x16' />
          <link href="/favicon.ico" rel='icon' sizes='32x32' />
          <link rel="apple-touch-icon" href="/logo512.png"></link>
          <meta name="theme-color" content="#056A4B" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* This ways to add css on global website use local asset folder withhtml link tag */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-500 to-green-700">
          <Navbar auth={authenticatedState}></Navbar>
          <div className="grow  font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><Component {...pageProps} /></div></div>
          <Footer></Footer>

        </div>
      </CartProvider>
    </GlobalProvider>
  )
}

export default MyApp
