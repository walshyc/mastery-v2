import { XIcon } from '@heroicons/react/outline';
import React from 'react'
import { useCart } from 'react-use-cart'

const cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();

    if (isEmpty) return (
        <p>Your Cart is empty</p>
    )
    return (
        <>
            <h1>Your Teams</h1>
            <div className='grid grid-cols-1'>
                {items.map((item) => (
                    <div className='flex flex-col bg-white p-3 m-3 rounded-lg' key={item.id}>
                        <div className="text-xl font-bold text-mgreen">{item.name} - €{item.price * 0.01}</div>
                        <div className="flex flex-col gap-1">
                            {item.selections.map(selection => (
                                <div className="" key={selection.player_id}>{selection.last_name} {selection.first_name.charAt(0)}</div>
                            ))}
                        </div>
                        <div className="flex">

                            <button className='px-3 py-1 bg-mred flex gap-1 rounded-lg justify-center items-center' onClick={() => removeItem(item.id)}><XIcon className='w-6 text-white'></XIcon> Remove</button>

                        </div>

                    </div>
                ))}
                <div className="text-2xl font-white">Total: €{cartTotal * 0.01} </div>
            </div>
            <pre className='text-white'>{JSON.stringify(items, null, 2)}</pre>
        </>)
}

export default cart