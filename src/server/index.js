var path = require('path')
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js')
const { config } = require('dotenv')

const dotenv = require('dotenv');

// Please Provide Path here, It was not working for me without providing path
dotenv.config({ path: "/home/abhikumar/gitWorkSpace/Travel-App/.env" });

// const applicationKey = process.env.API_KEY
// const geonameUsername = process.env.GEONAME_USERNAME;
// const weatherBitAPIKey = process.env.WEATHERBIT_API_KEY;
// const pixabayApiKey = process.env.PIXABAY_API_KEY;

const geonameUsername = "abhikumar";
const weatherBitAPIKey = "73d17426066149009e137e24bd126743";
const pixabayApiKey = "22070441-4f5dca4dd5453f8f08d7bf9f2";
const app = express()

const obj = {
    "geoname": geonameUsername,
    "weather": weatherBitAPIKey,
    "pixabay": pixabayApiKey
}

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('App listening on port 3000!')
})

app.get('/needkey', function (req, res) {
    res.send(obj);
})
