import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Observacion } from "../../observacion/model/observacion.entity";

@Entity()
export class Estado_observacion{
    @PrimaryColumn()
    id: number;

    @Column({length: 45})
    nombre: string;

    @OneToMany(() => Observacion, observacion => observacion.idestado)
    observacion: Observacion[];
}