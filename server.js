if (process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
}

//Uses the API key to call the information, so no one can have access to it, instead of running in the server
const  OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY
const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res ) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${req.body.latitude}&lon=${req.body.longitude}&appid=${OPENWEATHER_API_KEY}?units=auto'
    axios ({
        url: url,
        responseType: 'Json';
    }).then(data => res.json(data.data.currently ))
} )

app.listen(3000, () => {
    console.log('Server started')
})