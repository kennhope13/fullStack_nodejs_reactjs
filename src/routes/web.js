import express from 'express';
import handleController from '../controller/homeController'
const router = express.Router();
/**
 * 
 * @param {*} app 
 * @returns 
 */



const initWebRoutes = (app) => {
    router.get("/", handleController.handleHeloworld);
    router.get("/user", handleController.handleUser);
    router.get("/db", handleController.handleDB);
    router.post("/user-create", handleController.handleCreateUser);
    return app.use("/", router)
}
export default initWebRoutes;