import { Module } from '@nestjs/common';
import { EstadoController } from '../controllers/estado.controller';
import { DatabaseModule } from '../database/database.module';
import { EstadoService } from '../services/estado.service';
import { estadoProviders } from './estado.providers'

@Module({
  imports: [DatabaseModule],
  controllers: [EstadoController],
  providers: [
    ...estadoProviders,
    EstadoService
  ],
})
export class EstadoModule {}