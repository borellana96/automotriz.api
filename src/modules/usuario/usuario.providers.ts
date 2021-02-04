import { Connection, Repository } from 'typeorm';
import { Usuario } from './model/usuario.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: ['DATABASE_CONNECTION'],
  },
];