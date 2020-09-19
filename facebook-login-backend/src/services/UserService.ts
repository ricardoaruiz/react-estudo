import { injectable, inject } from 'tsyringe';
import IUserDTO from '../dto/IUserDTO';
import IUserRepository from '../repositories/IUserRepository';
import IUserService from './IUserService';

@injectable()
export default class UserService implements IUserService {

  private userRepository: IUserRepository;

  constructor(
    @inject('UserRepository')
    userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public checkUser(email: string): Promise<IUserDTO | null> {
    return this.userRepository.findByEmail(email);
  }

  public async insertUser({ name, email }: IUserDTO): Promise<IUserDTO | null> {
    try {
      await this.userRepository.create({ name, email });
      const createdUser = await this.userRepository.findByEmail(email);
      return Promise.resolve(createdUser);
    } catch (error) {
      return Promise.reject(error);
    }
  }

}
