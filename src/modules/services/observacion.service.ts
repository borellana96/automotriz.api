import { Injectable, Inject } from "@nestjs/common";
import { createQueryBuilder, Repository } from "typeorm";
import { Observacion } from "../entities/observacion.entity";
import { observacionDTO } from "../dto/observacion.dto"

@Injectable()
export class ObservacionService {

    constructor(
        @Inject('OBSERVACION_REPOSITORY')
        private observacionRepository: Repository<Observacion>
    ) { }

    async getObservaciones(): Promise<Observacion[]> {
        //Para seleccionar todos los campos de cada tabla que relaciona
        /*let observaciones = await this.observacionRepository.createQueryBuilder("obs")
            .innerJoinAndSelect("obs.idvehiculo", "vehiculo")
            .innerJoinAndSelect("obs.idestado", "estado_observacion")
            .innerJoinAndSelect("obs.creado_por", "usuario_creado")
            .innerJoinAndSelect("obs.resuelto_por", "usuario_resuelto")
            .getMany();*/

        //Para seleccionar solo algunos campos de cada tabla que relaciona
        let observaciones = await this.observacionRepository.createQueryBuilder("obs")
            .addSelect("estado_observacion.nombre", "estado_observacion_nombre")
            .addSelect("vehiculo.vim", "vehiculo_vim")
            .addSelect("usuario_creado.nombre_usuario", "usuario_creado_nombre_usuario")
            .addSelect("usuario_resuelto.nombre_usuario", "usuario_resuelto_nombre_usuario")
            .innerJoin("obs.idvehiculo", "vehiculo")
            .innerJoin("obs.idestado", "estado_observacion")
            .innerJoin("obs.creado_por", "usuario_creado")
            .innerJoin("obs.resuelto_por", "usuario_resuelto")
            .getMany();    
        return observaciones;
    }

    async getObservacionById(observacionId: string): Promise<Observacion> {
        //Para seleccionar todos los campos de cada tabla que relaciona
        /*let observacion = await this.observacionRepository.createQueryBuilder("obs")
            .innerJoinAndSelect("obs.idvehiculo", "vehiculo")
            .innerJoinAndSelect("obs.idestado", "estado_observacion")
            .innerJoinAndSelect("obs.creado_por", "usuario_creado")
            .innerJoinAndSelect("obs.resuelto_por", "usuario_resuelto")
            .where("obs.id = :id", { id: observacionId })
            .getOne();*/
        
        //Para seleccionar solo algunos campos de cada tabla que relaciona
        let observacion = await this.observacionRepository.createQueryBuilder("obs")
            .addSelect("estado_observacion.nombre", "estado_observacion_nombre")
            .addSelect("vehiculo.vim", "vehiculo_vim")
            .addSelect("usuario_creado.nombre_usuario", "usuario_creado_nombre_usuario")
            .addSelect("usuario_resuelto.nombre_usuario", "usuario_resuelto_nombre_usuario")
            .innerJoin("obs.idvehiculo", "vehiculo")
            .innerJoin("obs.idestado", "estado_observacion")
            .innerJoin("obs.creado_por", "usuario_creado")
            .innerJoin("obs.resuelto_por", "usuario_resuelto")
            .where("obs.id = :id", { id: observacionId })
            .getOne();
        return observacion;
    }

    async createObservacion(observacionDTO: observacionDTO): Promise<Observacion[]> {
        let observacion;
        if (!observacionDTO.idestado) {
            let observacionNuevaDTO: observacionDTO = {
                detalle: observacionDTO.detalle,
                idestado: 1,    //1 es el idEstado de la tabla Estado_observacion que es "registrada"
                idvehiculo: observacionDTO.idvehiculo,
                creado_por: observacionDTO.creado_por,
                resuelto_por: observacionDTO.resuelto_por
            };
            observacionDTO = observacionNuevaDTO;
        }
        observacion = this.observacionRepository.create(observacionDTO as any);
        return await this.observacionRepository.save(observacion);
    }

    async updateObservacion(observacionId: string, observacionDTO: observacionDTO) {
        return await this.observacionRepository.update(observacionId, observacionDTO);
    }

    async deleteObservacion(observacionId: string) {
        return await this.observacionRepository.delete(observacionId);
    }
}