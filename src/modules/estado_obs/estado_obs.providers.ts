import { Connection, Repository } from 'typeorm';
import { Estado_observacion } from './model/estado_obs.entity';

export const estado_obsProviders = [
  {
    provide: 'ESTADO_OBSERVACION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Estado_observacion),
    inject: ['DATABASE_CONNECTION'],
  },
];