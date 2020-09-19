import IUserDTO from "../dto/IUserDTO";

export default interface IUserService {
  checkUser(email: string): Promise<IUserDTO | null>;
  insertUser({ name, email }: IUserDTO): Promise<IUserDTO | null>;
}
