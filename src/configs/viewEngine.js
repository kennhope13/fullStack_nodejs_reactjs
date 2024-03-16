import express from 'express'
import mongoose from 'mongoose';
/**
 * 
 * @param {*} app - express app
 */

const configViewEngine = (app) => {
    app.use(express.static('./src/public'));
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
    //connect mongoose
    mongoose.connect('mongodb+srv://fullstacknodereactjs:phamminhtien.113@atlascluster.akgumrt.mongodb.net/fullStack')
    .then(() => { console.log("connect sucessful"); })
    .catch((err) => { console.log(err); })
    

}

export default configViewEngine