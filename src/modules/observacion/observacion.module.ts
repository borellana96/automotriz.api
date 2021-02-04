import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { observacionProviders } from './observacion.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...observacionProviders,
  ],
})
export class ObservacionModule {}