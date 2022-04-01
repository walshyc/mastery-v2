import { CollectionIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react'
import Router from "next/router";
import { supabase } from "../client"
import axios from 'axios';
import { useCart } from 'react-use-cart'


const cart = ({ user }) => {
    const {
        isEmpty,
        items,
        removeItem,
        cartTotal
    } = useCart();


    if (isEmpty) return (
        <div className="flex flex-col mx-3 pt-10 gap-5">
            <div className="text-base-100 font-bold text-4xl">Your cart is empty!</div>
            
            <Link href='/enter' passHref>
                <div className="btn btn-accent">Enter a Team</div>
            </Link>

        </div>
    )
    return (

        <div className='max-w-2xl mx-4 flex flex-col space-y-4'>
            <div className="text-base-100 font-bold text-4xl mt-3">Your Teams</div>
            <div className="text-base-100 text-md tracking-wide">
                Below is a list of your teams. You can add more or finish up by paying!
            </div>
            <div className='grid grid-cols-1 bg-base-100 rounded-lg space-y-5'>
                {items.map((item, indx) => (
                    <div className='flex justify-start gap-10 bg-base-100 p-3 rounded-lg border-b-2' key={item.id}>
                        <div className="flex text-md font-bold">{indx + 1}</div>
                        <div className="flex grow flex-col">
                            <div className="text-gray-700 font-bold">{item.name}</div>
                            {item.selections.map(selection => (
                                <div className="text-gray-500 text-sm" key={selection.player_id}>{selection.last_name} {selection.first_name.charAt(0)}</div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="text-gray-700 font-bold">€{(item.price * 0.01).toFixed(2)}</div>
                            <button className='btn btn-error btn-xs' onClick={() => removeItem(item.id)}><XIcon className='w-4 hidden sm:block'></XIcon> Remove</button>

                        </div>

                    </div>
                ))}
                <div className="flex justify-between mx-4 py-3 text-gray-700 font-bold">
                    <div className="flex flex-col w-1/2">
                        <div className="">Total</div>
                        <div className="text-gray-400 text-sm font-normal">All monies raised in aid of The Red Cross Ukraine Crisis Appeal </div>
                    </div>
                    <div className="mr-6">€{(cartTotal * 0.01).toFixed(2)}</div>
                </div>
                <Link href='/checkout' passHref>
                    <div className="btn btn-accent mx-0 md:mx-12">
                        Checkout </div>
                </Link>


                <div className="text-center text-gray-500 pb-2 text-sm cursor-pointer">
                    <Link href='/enter' passHref>
                        <div className="text-mgreen">
                            or add another team </div>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export const getServerSideProps = async ({ req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    if (!user) {
        return { props: {}, redirect: { destination: '/sign-in' } }
    }

    return { props: { user } }

}


export default cart