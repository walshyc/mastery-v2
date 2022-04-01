import React, { useEffect } from 'react'
import { useCart } from 'react-use-cart';


const thanks = () => {
  const { emptyCart } = useCart();
  useEffect(() => {
    emptyCart()
  }, [])

  return (
    <div className='flex flex-col gap-5 mt-4'>
      <div className="text-base-100 font-bold text-4xl">Thanks!</div>
      <div className="text-base-100 text-md tracking-wide leading-7">
        Your teams have been entered! Check back on Thursday for live scores. You can view your selections from your Profile page.
      </div>
    </div>)
}

export default thanks