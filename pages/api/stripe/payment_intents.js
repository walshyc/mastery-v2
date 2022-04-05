import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {

            const paymentIntent = await stripe.paymentIntents.create({
                amount: req.body.amount,
                currency: "eur",
                automatic_payment_methods: {
                    enabled: true,
                },
                receipt_email: req.body.email,
                metadata: { selections: JSON.stringify(req.body.metadata), user_id: req.body.user_id }
            });

            res.send({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (err) {
            console.log(err.message)
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {

        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};
export default handler;