import { Module } from '@nestjs/common';
import { VehiculoController } from '../controllers/vehiculo.controller';
import { DatabaseModule } from '../database/database.module';
import { VehiculoService } from '../services/vehiculo.service';
import { vehiculoProviders } from './vehiculo.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [VehiculoController],
  providers: [
    ...vehiculoProviders,
    VehiculoService
  ],
})
export class VehiculoModule {}