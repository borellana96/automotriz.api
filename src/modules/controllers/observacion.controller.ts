import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException} from '@nestjs/common';
import { ObservacionService } from '../services/observacion.service';
import { observacionDTO } from '../dto/observacion.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Observacion')
@Controller('observacion')
export class ObservacionController {
    constructor(private observacionService: ObservacionService) { }

    @Get()
    @ApiOperation({ summary: 'Obtiene todas las observaciones con los campos requeridos del Word' })
    async findAll(@Res() res) {
        let observaciones = await this.observacionService.getObservaciones();
        return res.status(HttpStatus.OK).json({
            observaciones
        })
    }

    @Get('/:observacionId')
    @ApiOperation({ summary: 'Obtiene una observación según el ID con los campos requeridos del Word' })
    async findObservacionById(@Res() res, @Param('observacionId') observacionId) {
        let observacion = await this.observacionService.getObservacionById(observacionId);
        if (!observacion)
            throw new NotFoundException('Observacion does not exists');
        else
            return res.status(HttpStatus.OK).json({
                observacion
            });
    }

    @Post()
    @ApiOperation({ summary: 'Guarda una observación, si no se define el "estado de observación" automáticamente se crea con el valor de "registrada"' })
    @ApiResponse({ status: 200, description: 'Observacion successfully created.' })
    async saveObservacion(@Res() res, @Body() observacionDTO: observacionDTO) {
        let observacion = await this.observacionService.createObservacion(observacionDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Observacion successfully created',
            observacion: observacion
        });
    }

    @Put(':observacionId')
    @ApiOperation({ summary: 'Actualiza una observación, requerida para cambiar el estado de la observación' })
    @ApiResponse({ status: 200, description: 'Observacion successfully update.' })
    async updateObservacion(
        @Res() res,
        @Param('observacionId') observacionId,
        @Body() observacionDTO: observacionDTO) {
        
        let observacionUpdate = await this.observacionService.updateObservacion(observacionId, observacionDTO);
        if (!observacionUpdate)
            throw new NotFoundException('Observacion does not exists');
        else
            return res.status(HttpStatus.OK).json({
                message: 'Observacion successfully update'
            })
    }

    @Delete('/:observacionId')
    @ApiOperation({ summary: 'Elimina alguna observación según el ID que se anotaron a un auto' })
    @ApiResponse({ status: 200, description: 'Observacion successfully deleted.' })
    async deleteObservacion(@Res() res, @Param('observacionId') observacionId) {
        let observacionDeleted = await this.observacionService.deleteObservacion(observacionId);
        if (!observacionDeleted.affected)
            throw new NotFoundException('Observacion does not exists');
        else
            return res.status(HttpStatus.OK).json({
                message: 'Observacion successfully deleted'
            })
    }
}