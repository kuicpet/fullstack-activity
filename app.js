const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');   //Handling Security of app
const mongoose = require('mongoose');   //MongoDB client
const foodRouter = require('./routes/ProductRoutes');

const app = express();

mongoose.connect("mongodb+srv://kuic:Ef3h4u0Kb7uHw3EU@cluster0-x8poy.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true},
).then(() => {
    console.log("successfully connected to Mongodb Atlas");
})
.catch((error) => {
    console.log("Unable to connect to MongoDB Atlad");
    console.error(error);
});

app.use(express.json());  // Make sure it comes back as json
app.use(cors());    //Handling CORS errors
app.use(bodyParser.urlencoded({extended: false})); //Handling x-www-urlencoded forms
app.use(bodyParser.json()); //Handling post request & parsing json
app.use(helmet.hidePoweredBy()); //Hide X-Powered-By


app.use(foodRouter);

module.exports = app;