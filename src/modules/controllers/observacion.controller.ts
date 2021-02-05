import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException} from '@nestjs/common';
import { ObservacionService } from '../services/observacion.service';
import { observacionDTO } from '../dto/observacion.dto';

@Controller('observacion')
export class ObservacionController {
    constructor(private observacionService: ObservacionService) { }

    @Get()
    async findAll(@Res() res) {
        let observaciones = await this.observacionService.getObservaciones();
        return //res.status(HttpStatus.OK).json({
            observaciones;
        //})
    }

    @Get('/:observacionId')
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
    async saveObservacion(@Res() res, @Body() observacionDTO: observacionDTO) {
        let observacion = await this.observacionService.createObservacion(observacionDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Observacion successfully created',
            observacion: observacion
        });
    }
    // {
    //     "detalle": "Ventanas rotas",
    //     "idestado": 3,
    //     "idvehiculo": 1,
    //     "creado_por": 3,
    //     "resuelto_por": 2
    // }

    @Put(':observacionId')
    async updateObservacion(
        @Res() res,
        @Param('observacionId') observacionId,
        @Body() observacionDTO: observacionDTO) {
        
        let observacionUpdate = await this.observacionService.updateObservacion(observacionId, observacionDTO);
        if (!observacionUpdate)
            throw new NotFoundException('Observacion does not exists');
        else
            return res.status(HttpStatus.OK).json({
                message: 'Observacion Successfully Update'
            })
    }

    @Delete('/:observacionId')
    async deleteObservacion(@Res() res, @Param('observacionId') observacionId) {
        let observacionDeleted = await this.observacionService.deleteObservacion(observacionId);
        if (!observacionDeleted.affected)
            throw new NotFoundException('Observacion does not exists');
        else
            return res.status(HttpStatus.OK).json({
                message: 'Observacion Successfully Deleted'
            })
    }
}