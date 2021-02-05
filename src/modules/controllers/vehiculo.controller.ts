import { Controller, Get, Post, Res, HttpStatus, Body, Param, NotFoundException} from '@nestjs/common';
import { VehiculoService } from '../services/vehiculo.service';
import { CreateVehiculoDTO } from '../dto/vehiculo.dto';

@Controller('vehiculo')
export class VehiculoController {
    constructor(private vehiculoService: VehiculoService) { }

    @Get()
    async findAll(@Res() res) {
        let vehiculos = await this.vehiculoService.getVehiculos();
        return res.status(HttpStatus.OK).json({
            vehiculos
        })
    }

    @Get('/:vehiculoId')
    async findVehiculoById(@Res() res, @Param('vehiculoId') vehiculoId){
        let vehiculo = await this.vehiculoService.getVehiculoById(vehiculoId);
        if(!vehiculo)
            throw new NotFoundException('Vehiculo does not exists');
        else
            return res.status(HttpStatus.OK).json({
                vehiculo
            })
    }

    @Post()
    async saveVehiculo(@Res() res, @Body() createVehiculoDTO: CreateVehiculoDTO) {
        let vehiculo = await this.vehiculoService.createVehiculo(createVehiculoDTO);
        res.status(HttpStatus.OK).json({
            message: 'Vehiculo successfully created',
            vehiculo: vehiculo
        });
    }
    // {
    //     "vim": "Hyundai - Elantra"
    // }
}