import { Module } from '@nestjs/common';
import { ObservacionController } from '../controllers/observacion.controller';
import { DatabaseModule } from '../database/database.module';
import { EstadoModule } from '../estado/estado.module';
import { estadoProviders } from '../estado/estado.providers';
import { EstadoService } from '../services/estado.service';
import { ObservacionService } from '../services/observacion.service';
import { observacionProviders } from './observacion.providers';

@Module({
  imports: [DatabaseModule, EstadoModule],
  controllers: [ObservacionController],
  providers: [
    ...observacionProviders,
    ...estadoProviders,
    ObservacionService,
    EstadoService
  ],
})
export class ObservacionModule {}