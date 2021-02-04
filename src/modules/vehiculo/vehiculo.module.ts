import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { vehiculoProviders } from './vehiculo.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...vehiculoProviders,
  ],
})
export class VehiculoModule {}