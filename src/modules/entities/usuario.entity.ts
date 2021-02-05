import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Observacion } from "./observacion.entity";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    nombre_usuario: string;

    @Column({ length: 45 })
    password: string;

    @OneToMany(type => Observacion, observacion => observacion.creado_por)
    observacion_creado: Observacion[];

    @OneToMany(() => Observacion, observacion => observacion.resuelto_por)
    observacion_resuelto: Observacion[];
}