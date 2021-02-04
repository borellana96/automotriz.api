import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Estado_observacion } from "../../estado_obs/model/estado_obs.entity";
import { Usuario } from "../../usuario/model/usuario.entity";
import { Vehiculo } from "../../vehiculo/model/vehiculo.entity";

@Entity()
export class Observacion {
    @PrimaryColumn()
    id: number;

    @Column({ length: 100 })
    detalle: string;

    @ManyToOne(() => Estado_observacion, idestado => idestado.observacion)
    idestado: Estado_observacion;

    @ManyToOne(() => Vehiculo, idvehiculo => idvehiculo.observacion)
    idvehiculo: Vehiculo;

    @ManyToOne(() => Usuario, creado_por => creado_por.observacion_creado)
    creado_por: Usuario;

    @ManyToOne(()=> Usuario, resuelto_por => resuelto_por.observacion_resuelto)
    resuelto_por: Usuario
}