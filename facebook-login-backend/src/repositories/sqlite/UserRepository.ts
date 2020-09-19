import db from '../../database/db';
import IUserDTO from '../../dto/IUserDTO';
import IUserRepository from '../IUserRepository';

export default class UserRepository implements IUserRepository {

  public create({ name, email }: IUserDTO): Promise<void> {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO USER (NAME, EMAIL) VALUES(?,?)', [name, email],
        (err: Error | null) => {
          if (err) {
            console.error('Falha ao cadastrar o usuário na base de dados');
            reject(err);
          }
          resolve();
        })
    })
  }

  public findByEmail(email: string): Promise<IUserDTO | null> {
    return new Promise<IUserDTO>((resolve, reject) => {
      db.get('SELECT * FROM USER WHERE EMAIL = ?', [email],
        ((err: Error | null, user) => {
          if (err) {
            reject(err);
          }
          resolve(user);
        }));
    })
  }
}
