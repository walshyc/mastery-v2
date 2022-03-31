import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const handler = async (req, res) => {
    if (req.method === "POST") {
        const sig = req.headers['stripe-signature'];

        let event;
      
        try {
          event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
        } catch (err) {
          res.status(400).send(`Webhook Error: ${err.message}`);
          return;
        }
      
        // // Handle the event
        // switch (event.type) {
        //   case 'charge.captured':
        //     const charge = event.data.object;
        //     // Then define and call a function to handle the event charge.captured
        //     break;
        //   case 'charge.expired':
        //     const charge = event.data.object;
        //     // Then define and call a function to handle the event charge.expired
        //     break;
        //   case 'charge.failed':
        //     const charge = event.data.object;
        //     // Then define and call a function to handle the event charge.failed
        //     break;
        //   case 'charge.pending':
        //     const charge = event.data.object;
        //     // Then define and call a function to handle the event charge.pending
        //     break;
        //   case 'charge.refunded':
        //     const charge = event.data.object;
        //     // Then define and call a function to handle the event charge.refunded
        //     break;
        //   case 'charge.succeeded':
        //     const charge = event.data.object;
        //     // Then define and call a function to handle the event charge.succeeded
        //     break;
        //   case 'charge.updated':
        //     const charge = event.data.object;
        //     // Then define and call a function to handle the event charge.updated
        //     break;
        //   case 'charge.dispute.closed':
        //     const dispute = event.data.object;
        //     // Then define and call a function to handle the event charge.dispute.closed
        //     break;
        //   case 'charge.dispute.created':
        //     const dispute = event.data.object;
        //     // Then define and call a function to handle the event charge.dispute.created
        //     break;
        //   case 'charge.dispute.funds_reinstated':
        //     const dispute = event.data.object;
        //     // Then define and call a function to handle the event charge.dispute.funds_reinstated
        //     break;
        //   case 'charge.dispute.funds_withdrawn':
        //     const dispute = event.data.object;
        //     // Then define and call a function to handle the event charge.dispute.funds_withdrawn
        //     break;
        //   case 'charge.dispute.updated':
        //     const dispute = event.data.object;
        //     // Then define and call a function to handle the event charge.dispute.updated
        //     break;
        //   case 'charge.refund.updated':
        //     const refund = event.data.object;
        //     // Then define and call a function to handle the event charge.refund.updated
        //     break;
        //   // ... handle other event types
        //   default:
        //     console.log(`Unhandled event type ${event.type}`);
        // }
      
        // Return a 200 response to acknowledge receipt of the event
        res.send();
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};

export default handler;