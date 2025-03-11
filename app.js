import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
const app=express()
const port=process.env.CONNECT_TO_RENDER||3000;
dotenv.config()
app.use(express.json());



const autho=process.env.RENDER_API_KEY;

// Endpoint to get installed apps
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services?includePreviews=true&limit=20', {
            headers: {
                'Authorization': `Bearer rnd_DIGTLUnywOCX1XJb6lgsSeqrNSLm`,
                'Accept': 'application/json'
                
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log(process.env.RENDER_API_KEY);
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch apps' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

