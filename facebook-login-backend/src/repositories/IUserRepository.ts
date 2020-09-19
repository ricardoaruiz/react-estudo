import IUserDTO from '../dto/IUserDTO';

export default interface IUserInterface {
  create(user: IUserDTO): Promise<void>;
  findByEmail(email: string): Promise<IUserDTO | null>;
}
