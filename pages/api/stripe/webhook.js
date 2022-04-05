const getRawBody = require("raw-body");
import axios from "axios";
import { newEntries } from '../../../entries'

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Disable next.js body parsing (stripe needs the raw body to validate the event)
export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req, res) => {
    const headers = req.headers;

    try {
        const rawBody = await getRawBody(req);

        const stripeEvent = stripe.webhooks.constructEvent(
            rawBody,
            headers["stripe-signature"],
            process.env.STRIPE_WEBHOOK_SECRET
        );

        console.log(`stripeEvent: ${stripeEvent.type}`);

        // Get the object from stripeEvent
        const { selections, user_id, } = stripeEvent.data.object.metadata;






        switch (stripeEvent.type) {
            case "charge.succeeded":
                const fullSelections = JSON.parse(selections).map(selection => {
                    const sel = { name: selection.name, tiebreaker: selection.tiebreaker, user_id: user_id, picks: [] }
                    selection.selections.map(id => {
                        //loop over newEntries and find the player with the id
                        newEntries.forEach(entry => {
                            if (entry.player_id === id) {

                                sel.picks.push(entry)
                            }

                        })
                    })

                    return sel;
                })

                console.log(fullSelections)
                // use axios to post each fullselecitons to the add_team api usinf a for of loop
                for (const selection of fullSelections) {
                    
                    // await axios.post(`http://localhost:3000/api/add_team`, {
                    //     team_name: selection.name,
                    //     selections: selection.picks,
                    //     user_id: selection.user_id,
                    //     tiebreaker: selection.tiebreaker
                    // })
                    await axios.post(`https://mastery.golf/api/add_team`, {
                        team_name: selection.name,
                        selections: selection.picks,
                        user_id: selection.user_id,
                        tiebreaker: selection.tiebreaker
                    })
                }

                // await axios.post('https://mastery.golf/api/sendgrid', {
                //     email: stripeEvent.data.object.receipt_email,
                //     selections: fullSelections
                // })


                break;


            // no default
        }

        // Send success response
        res.send({ status: "success" });
    } catch (error) {
        console.log("stripe webhook error", error);

        // Send error response
        res.send({ status: "error", code: error.code, message: error.message });
    }
};

export default handler;