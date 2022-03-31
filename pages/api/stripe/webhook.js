import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
    if (req.method === "POST") {
        let event;
        try {
            const rawbody = await buffer(req);
            const sig = req.headers['stripe-signature'];
            event = stripe.webhooks.constructEvent(rawbody.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);

            res.json({ received: true })
        } catch (err) {
            res.status(400).send(`Webhook Errors: ${err.message}`);
            return;
        }


    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};

export default handler;