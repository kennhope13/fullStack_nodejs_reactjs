import express from 'express'
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';
import bodyParser from 'body-parser';
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

app.listen(PORT, () => {
    console.log("thanh cong");
})
