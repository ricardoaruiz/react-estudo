import { container } from 'tsyringe';

import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/sqlite/UserRepository';

import IUserService from '../services/IUserService';
import UserService from '../services/UserService';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
)

container.registerSingleton<IUserService>(
  'UserService',
  UserService
)
