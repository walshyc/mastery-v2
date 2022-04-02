import React, { useEffect } from 'react'
import { useCart } from 'react-use-cart';
import Image from 'next/image'
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/outline';


const thanks = () => {
  const { emptyCart } = useCart();
  useEffect(() => {
    emptyCart()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
      <div className='order-last md:order-first'>

        <Image alt='golfer celebrating' src='/phil.webp' width={600} height={400} className="rounded-2xl"></Image>
      </div>
      <main className='flex flex-col gap-5 mt-4 max-w-lg'>
        <div className="text-base-100 font-bold text-4xl">Thanks! You're In!</div>
        <div className="text-base-100 text-md tracking-wide leading-7">
          Your teams have been entered! Check back on Thursday for live scores. You can view your selections from your Profile page.
        </div>
        <Link href="/profile" passHref>
          <div className="btn btn-accent ">

            <UserCircleIcon className="w-4 mr-3"></UserCircleIcon> Profile
          </div>
        </Link>
        <div className=" bg-gray-100 my-3 p-3 rounded-lg text-base shadow-md text-gray-100 sm:my-5 sm:text-xl lg:text-lg xl:text-xl">
          <div className="flex gap-4">
            <Image alt='ukraine flag' src='/flags/UKR.svg' width={100} height={30}></Image>
            <div className="text-ukraineblue font-medium tracking-wider">All profits donated to the <span className='text-mred font-medium'>Irish Red Cross Ukraine Crisis Appeal.</span> </div>
          </div>
        </div>

      </main >
    </div >
  )
}

export default thanks