import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm'

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

const checkout = () => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/api/stripe/payment_intents", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);




    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#056A4B',
            colorBackground: '#f1f1f1',
            colorText: '#000111',
        },
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (

        clientSecret && (
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
        )

    )
}

export default checkout