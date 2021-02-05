import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Vehiculo } from "../entities/vehiculo.entity";
import { CreateVehiculoDTO } from "../dto/vehiculo.dto"

@Injectable()
export class VehiculoService {
    constructor(
        @Inject('VEHICULO_REPOSITORY')
        private vehiculoRepository: Repository<Vehiculo>,
    ) { }

    async getVehiculos(): Promise<Vehiculo[]> {
        return this.vehiculoRepository.find();
    }

    async getVehiculoById(vehiculoId): Promise<Vehiculo> {
        return this.vehiculoRepository.findOne(vehiculoId);
    }

    async createVehiculo(createVehiculoDTO: CreateVehiculoDTO): Promise<Vehiculo[]> {
        let vehiculo = this.vehiculoRepository.create(createVehiculoDTO as any);
        return await this.vehiculoRepository.save(vehiculo);
    }
}