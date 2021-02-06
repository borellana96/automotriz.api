import { ApiProperty } from "@nestjs/swagger";

export class observacionDTO {
    @ApiProperty()
    readonly detalle: string;

    @ApiProperty()
    readonly idestado?: any;

    @ApiProperty()
    readonly idvehiculo: any;

    @ApiProperty()
    readonly creado_por: any;

    @ApiProperty()
    readonly resuelto_por: any;
}