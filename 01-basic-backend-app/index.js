require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('Hello World !')
})

app.get('/rugved' ,(req, res) => {
    res.send('My name is Rugved !')
})

app.get('/activity', async (req, res) => {
    try {
        const response = await axios.get('https://bored-api.appbrewery.com/random')
        res.json(response.data)
    } catch (error) {
        res.status(500).send('Error fetching data')
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${port}`);
    
})