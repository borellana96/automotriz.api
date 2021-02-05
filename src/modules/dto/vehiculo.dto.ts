import { ApiProperty } from "@nestjs/swagger";

export class CreateVehiculoDTO {
    @ApiProperty()
    readonly vim: string;
}