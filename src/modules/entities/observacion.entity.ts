import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estado_observacion } from "./estado.entity";
import { Usuario } from "./usuario.entity";
import { Vehiculo } from "./vehiculo.entity";

@Entity()
export class Observacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    detalle: string;

    @ManyToOne(() => Estado_observacion, idestado => idestado.observacion)
    idestado: Estado_observacion;

    @ManyToOne(() => Vehiculo, idvehiculo => idvehiculo.observacion)
    idvehiculo: Vehiculo;

    @ManyToOne(type => Usuario, creado_por => creado_por.observacion_creado)
    creado_por: Usuario;

    @ManyToOne(() => Usuario, resuelto_por => resuelto_por.observacion_resuelto)
    resuelto_por: Usuario
}