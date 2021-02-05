import { Module } from '@nestjs/common';
import { UsuarioController } from '../controllers/usuario.controller';
import { DatabaseModule } from '../database/database.module';
import { UsuarioService } from '../services/usuario.service';
import { usuarioProviders } from './usuario.providers';

@Module({
  imports: [DatabaseModule],
  controllers:[UsuarioController],
  providers: [
    ...usuarioProviders,
    UsuarioService
  ],
})
export class UsuarioModule {}