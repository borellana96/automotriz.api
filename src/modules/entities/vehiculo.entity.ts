import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Observacion } from "./observacion.entity";

@Entity()
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    vim: string;

    @OneToMany(() => Observacion, observacion => observacion.idvehiculo)
    observacion: Observacion[];
}