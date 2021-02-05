import { Connection, Repository } from 'typeorm';
import { Estado_observacion } from '../entities/estado.entity';

export const estadoProviders = [
  {
    provide: 'ESTADO_OBSERVACION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Estado_observacion),
    inject: ['DATABASE_CONNECTION'],
  },
];