import { ApiProperty } from "@nestjs/swagger";

export class CreateEstadoDTO {
    @ApiProperty()
    readonly nombre: string;
}