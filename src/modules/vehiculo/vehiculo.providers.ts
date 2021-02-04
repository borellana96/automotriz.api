import { Connection, Repository } from 'typeorm';
import { Vehiculo } from './model/vehiculo.entity';

export const vehiculoProviders = [
  {
    provide: 'VEHICULO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Vehiculo),
    inject: ['DATABASE_CONNECTION'],
  },
];