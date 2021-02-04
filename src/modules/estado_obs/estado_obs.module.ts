import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { estado_obsProviders } from './estado_obs.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...estado_obsProviders,
  ],
})
export class Estado_obsModule {}