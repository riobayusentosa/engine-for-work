const express = require('express');
const app = express();
const cors = require('cors');
const {PORT,SERVER_URL} = require('./constants');

const {kenx} = require('./db');

app.use(express.json());
app.use(cors({origin:SERVER_URL,credentials:true}));

app.get('/', (req,res) => {
    res.send(`${SERVER_URL}`);
})

const appStart = async() => {
    try {
        app.listen(PORT,()=>
        {
            console.log(`The app is running at ${SERVER_URL}`);
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

appStart();