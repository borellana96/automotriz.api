import { Controller, Get, Post, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { EstadoService } from '../services/estado.service';
import { CreateEstadoDTO } from '../dto/estado.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Estado de observacion')
@Controller('estado')
export class EstadoController {
    constructor(private estadoService: EstadoService) { }

    @Get()
    @ApiOperation({ summary: 'Obtiene los estados de las observaciones que son 3 e inicialmente insertados en esta tabla: Registrada, Aceptada y Rechazada' })
    async findAll(@Res() res) {
        let estados = await this.estadoService.getEstados();
        return res.status(HttpStatus.OK).json({
            estados
        });
    }

    @Get('/:estadoId')
    @ApiOperation({ summary: 'Obtiene un estado de observación según el ID entre ellos: Registrada, Aceptada y Rechazada' })
    @ApiResponse({ status: 200, description: 'Estado successfully created.' })
    @ApiResponse({ status: 404, description: "Estado does not exists." })
    async findEstadoById(@Res() res, @Param('estadoId') estadoId) {
        let estado = await this.estadoService.getEstadoById(estadoId);
        if (!estado)
            throw new NotFoundException('Estado does not exists')
        else
            return res.status(HttpStatus.OK).json({
                estado
            });
    }

    @Post()
    @ApiOperation({ summary: 'Crea un estado de observación' })
    @ApiResponse({ status: 200, description: 'Estado successfully created.' })
    async saveEstado(@Res() res, @Body() createEstadoDTO: CreateEstadoDTO) {
        let estado = await this.estadoService.createEstado(createEstadoDTO);
        res.status(HttpStatus.OK).json({
            message: 'Estado successfully created',
            estado: estado
        });
    }
}