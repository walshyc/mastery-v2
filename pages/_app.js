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
          {/* This ways to add css on global website use local asset folder withhtml link tag */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <div className="flex flex-col min-h-screen bg-mgreen">
          <Navbar auth={authenticatedState}></Navbar>
          {/* <nav className='flex justify-around m-3'>

        <Link href='/' passHref>
          <h1>Mastery</h1>
        </Link>
        <Link href='/profile' passHref>
          <h1>Profile</h1>
        </Link>
        {authenticatedState === 'not-authenticated' && (
          <Link href='/sign-in' passHref>
            <h1>Sign In</h1>
          </Link>
        )}
        <Link href='/protected' passHref>
          <h1>Protected</h1>
        </Link>


      </nav> */}
          <div className="grow bg-mgreen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><Component {...pageProps} /></div></div>
          <Footer></Footer>

        </div>
      </CartProvider>
    </GlobalProvider>
  )
}

export default MyApp
