import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { usuarioProviders } from './usuario.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...usuarioProviders,
  ],
})
export class UsuarioModule {}