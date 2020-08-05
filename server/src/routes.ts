import express from 'express';
import ClassesController from './Controllers/ClassesController';
import ConnectionsController from './Controllers/ConnectionsController';

const routes = express.Router();

const classController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classController.index);
routes.post('/classes', classController.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);


export default routes;