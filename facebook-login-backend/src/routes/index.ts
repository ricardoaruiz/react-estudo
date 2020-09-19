import { Router } from 'express';
import facebookRoutes from './auth/facebook.routes';

const routes = Router();
routes.use('', facebookRoutes);

export default routes;
