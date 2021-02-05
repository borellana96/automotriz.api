import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDTO {
    @ApiProperty()
    readonly nombre_usuario: string;

    @ApiProperty()
    readonly password: string;
}