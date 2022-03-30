import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body)
        // res.status(200).json({ name: 'John Doe' })
        try {
            const { team_name, selections, user_id } = req.body;
            const { data, error } = await supabase
                .from('selections')
                .insert([
                    { team_name, picks: selections, user_id: user_id },
                ])
            console.log(data)
            console.log(error)
            res.status(200).send();
        } catch (err) {
            console.log(err)
            res.status(500).json({ statusCode: 500, message: err });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }

    //res.status(200).json({ name: 'John Doe' })
}


export default handler;
