import { Module } from '@nestjs/common';
import { ObservacionModule } from './modules/observacion/observacion.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { VehiculoModule } from './modules/vehiculo/vehiculo.module';
import { EstadoModule } from './modules/estado/estado.module'

@Module({
  imports: [
    UsuarioModule,
    VehiculoModule,
    ObservacionModule,
    EstadoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
