const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const axios = require('axios')


const needle = require('needle');
require('dotenv').config();
app.use(cors());
const token = process.env.API_KEY;

//search for a spe
const searchEndpointUrl = `https://www.thecocktaildb.com/api/json/v2/${token}/search.php?s=`
const randomEndpointUrl = `https://www.thecocktaildb.com/api/json/v2/${token}/randomselection.php`
const multiIngredientEndpointUrl = `https://www.thecocktaildb.com/api/json/v2/${token}/filter.php?i=Dry_Vermouth,Gin,Anis`

// a test route to make sure we can reach the backend
//this would normally go in a routes file



app.get('/', (req,res) => {
    res.json({message: "Welcome to the home page"})
})
app.get('/test', (req, res)=>{
    axios.get(randomEndpointUrl)
    .then((response)=>{
        res.send(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.get('/drink/:name', (req, res)=>{
    axios.get(searchEndpointUrl + req.params.name)
    .then((response)=>{
        res.send(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
})
//Set the port that you want the server to run on
const port = process.env.PORT || 8080;
app.listen(port);
console.log('App is listening on port ' + port);