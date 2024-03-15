import express from 'express'
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';
require('dotenv').config();
var app = express();

// configViewEngine
configViewEngine(app);

//initWebRoutes
initWebRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("thanh cong");
})
