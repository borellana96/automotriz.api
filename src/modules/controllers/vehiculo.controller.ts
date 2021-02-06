import { Controller, Get, Post, Res, HttpStatus, Body, Param, NotFoundException} from '@nestjs/common';
import { VehiculoService } from '../services/vehiculo.service';
import { CreateVehiculoDTO } from '../dto/vehiculo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Vehiculo')
@Controller('vehiculo')
export class VehiculoController {
    constructor(private vehiculoService: VehiculoService) { }

    @Get()
    @ApiOperation({ summary: 'Obtiene todos los vehículos que han pasado el proceso de inspección' })
    async findAll(@Res() res) {
        let vehiculos = await this.vehiculoService.getVehiculos();
        return res.status(HttpStatus.OK).json({
            vehiculos
        })
    }

    @Get('/:vehiculoId')
    @ApiOperation({ summary: 'Obtiene un vehículo según el ID que ha pasado el proceso de inspección' })
    @ApiResponse({ status: 200, description: 'vehiculo successfully created.' })
    @ApiResponse({ status: 404, description: "Vehiculo does not exists." })
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
    @ApiOperation({ summary: 'Guarda vehículos que paasarán por el proceso de inspección' })
    @ApiResponse({ status: 200, description: 'Vehiculo successfully created.' })
    async saveVehiculo(@Res() res, @Body() createVehiculoDTO: CreateVehiculoDTO) {
        let vehiculo = await this.vehiculoService.createVehiculo(createVehiculoDTO);
        res.status(HttpStatus.OK).json({
            message: 'Vehiculo successfully created',
            vehiculo: vehiculo
        });
    }
}