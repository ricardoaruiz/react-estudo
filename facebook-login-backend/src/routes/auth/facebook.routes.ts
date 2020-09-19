import { Router, Request, Response } from 'express';
import passport from 'passport';
import AuthFacebookController from '../../controllers/AuthFacebookController';

const routes = Router();
const authFacebookController = new AuthFacebookController();

routes.get('/auth/facebook/token',
  passport.authenticate('facebook-token'),
  authFacebookController.getFacebookInformation);

export default routes;
