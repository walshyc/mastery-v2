import React, { useState, useEffect } from 'react'
import { supabase } from "../client"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm'
import { useCart } from 'react-use-cart';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

const checkout = ({ user }) => {
    const [clientSecret, setClientSecret] = useState("");

    const { items, cartTotal } = useCart();


    const getIds = () => {
        let ids = [];
        items.forEach(item => {
            let team = {}
            team.tiebreaker = item.tiebreaker
            team.name = item.name
            let idsSelect = []
            // loop over item selections and store ids
            item.selections.forEach(selection => {
                idsSelect.push(selection.player_id)
            })
            team.selections = idsSelect
            ids.push(team)
        })
        return ids
    }


    useEffect(() => {
        console.log(user.email)
        // Create PaymentIntent as soon as the page loads
        let total;

        switch (items.length) {
            case 1:
                total = 1000
                break;
            case 2 || 3:
                total = 2000
                break;
            case 4:
                total = 3000
                break;
            case 5 || 6:
                total = 4000
                break;
            case 7:
                total = 5000
                break;
            case 8 || 9:
                total = 6000
                break;
            case 10:
                total = 7000
                break;
            case 11 || 12:
                total = 8000
                break;

            default:
                break;
        }
        fetch("/api/stripe/payment_intents", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ metadata: getIds(), amount: total, user_id: user.id, email: user.email }),
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

export const getServerSideProps = async ({ req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    if (!user) {
        return { props: {}, redirect: { destination: '/sign-in' } }
    }

    return { props: { user } }

}

export default checkout