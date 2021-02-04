import { observable } from "rxjs";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Observacion } from "../../observacion/model/observacion.entity";

@Entity()
export class Vehiculo {
    @PrimaryColumn()
    id: number;

    @Column({ length: 45 })
    vim: string;

    @OneToMany(() => Observacion, observacion => observacion.idvehiculo)
    observacion: Observacion[];
}