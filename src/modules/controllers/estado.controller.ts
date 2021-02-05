import { Controller, Get, Post, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { EstadoService } from '../services/estado.service';
import { CreateEstadoDTO } from '../dto/estado.dto';

@Controller('estado')
export class EstadoController {
    constructor(private estadoService: EstadoService) { }

    @Get()
    async findAll(@Res() res) {
        let estados = await this.estadoService.getEstados();
        return res.status(HttpStatus.OK).json({
            estados
        });
    }

    @Get('/:estadoId')
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
    async saveEstado(@Res() res, @Body() createEstadoDTO: CreateEstadoDTO) {
        let estado = await this.estadoService.createEstado(createEstadoDTO);
        res.status(HttpStatus.OK).json({
            message: 'Estado successfully created',
            estado: estado
        });
    }
    // {
    //     "nombre": "rechazada"
    // }

}