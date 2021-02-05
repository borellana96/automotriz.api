import { Module } from '@nestjs/common';
import { ObservacionController } from '../controllers/observacion.controller';
import { DatabaseModule } from '../database/database.module';
import { ObservacionService } from '../services/observacion.service';
import { observacionProviders } from './observacion.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ObservacionController],
  providers: [
    ...observacionProviders,
    ObservacionService
  ],
})
export class ObservacionModule {}