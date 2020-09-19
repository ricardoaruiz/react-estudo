import { Request, Response } from 'express';
import { container } from 'tsyringe';
import passport from 'passport';
import FacebookTokenStrategy, { Profile } from 'passport-facebook-token';
import UserService from '../services/UserService';
import facebookConfig from '../config/facebook';

interface IUser {
  name: string;
  email: string;
}

export default class AuthFacebookController {

  constructor() {

    const userService = container.resolve(UserService);

    passport.serializeUser<IUser, IUser>((user, done) => {
      done(null, user);
    });

    passport.deserializeUser((obj, done) => {
      done(null, obj);
    });

    passport.use(new FacebookTokenStrategy({
      clientID: facebookConfig.credentials.appId,
      clientSecret: facebookConfig.credentials.appSecret,
      fbGraphVersion: 'v3.0'
    }, async (accessToken: string, refreshToken: string, profile: Profile, done) => {
      try {
        console.log('accessToken', accessToken)
        console.log('profile._json', profile._json)
        const { name, email } = profile._json;
        const user = await userService.checkUser(email);

        if (!user) {
          const newUser = await userService.insertUser({ name, email });
          done(null, newUser)
        }

        done(null, user)
      } catch (error) {
        console.error('error', error)
        done(error, null);
      }
    }));
  }

  public async getFacebookInformation(request: Request, response: Response): Promise<Response> {
    return request.user
      ? response.json(request.user)
      : response.status(401).send();
  };

}
