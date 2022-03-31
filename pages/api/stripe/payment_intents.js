import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
    //console.log(req)
    if (req.method === "POST") {
        try {
            // const { amount, email, metadata } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                amount: 1000,
                currency: "eur",
                automatic_payment_methods: {
                    enabled: true,
                },
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