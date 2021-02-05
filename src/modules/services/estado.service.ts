import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Estado_observacion } from "../entities/estado.entity";
import { CreateEstadoDTO } from "../dto/estado.dto"

@Injectable()
export class EstadoService {
    constructor(
        @Inject('ESTADO_OBSERVACION_REPOSITORY')
        private estadoRepository: Repository<Estado_observacion>,
    ) { }

    async getEstados(): Promise<Estado_observacion[]> {
        return this.estadoRepository.find();
    }

    async getEstadoById(estadoById): Promise<Estado_observacion> {
        return this.estadoRepository.findOne(estadoById);
    }

    async createEstado(createEstadoDTO: CreateEstadoDTO): Promise<Estado_observacion[]> {
        const estado = this.estadoRepository.create(createEstadoDTO as any);
        return await this.estadoRepository.save(estado);
    }

}