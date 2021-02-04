import { Module } from '@nestjs/common';
import { Observacion } from 'dist/models/observacion.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObservacionModule } from './modules/observacion/observacion.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { VehiculoModule } from './modules/vehiculo/vehiculo.module';
import { Estado_obsModule } from './modules/estado_obs/estado_obs.module'

@Module({
  imports: [
    UsuarioModule,
    VehiculoModule,
    ObservacionModule,
    Estado_obsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
