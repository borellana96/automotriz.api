import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Observacion } from "./observacion.entity";

@Entity()
export class Estado_observacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    nombre: string;

    @OneToMany(() => Observacion, observacion => observacion.idestado)
    observacion: Observacion[];
}