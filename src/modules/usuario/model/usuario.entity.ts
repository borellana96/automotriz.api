import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Observacion } from "../../observacion/model/observacion.entity";

@Entity()
export class Usuario{
    @PrimaryColumn()
    id: number;

    @Column({length: 45})
    nombre_usuario: string;

    @Column({length: 45})
    password: string;

    @OneToMany(() => Observacion, observacion => observacion.creado_por)
    observacion_creado: Observacion[];

    @OneToMany(() => Observacion, observacion => observacion.resuelto_por)
    observacion_resuelto: Observacion[];
}