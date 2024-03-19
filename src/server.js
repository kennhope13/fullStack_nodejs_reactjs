import express from 'express'
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
require('dotenv').config();
var app = express();


// configBody-paser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


// configViewEngine
configViewEngine(app);

//initWebRoutes
initWebRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT);

//connect mongodb
mongoose.connect(process.env.dbConnectMongodb)
.then(() => { console.log("connect sucessful"); })
.catch((err) => { console.log(err); })


