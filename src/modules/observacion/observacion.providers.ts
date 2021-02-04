import { Connection, Repository } from 'typeorm';
import { Observacion } from './model/observacion.entity';

export const observacionProviders = [
  {
    provide: 'OBSERVACION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Observacion),
    inject: ['DATABASE_CONNECTION'],
  },
];