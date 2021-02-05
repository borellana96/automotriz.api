import { Controller, Get, Post, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { CreateUsuarioDTO } from '../dto/usuario.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) { }

    @Get()
    @ApiOperation({ summary: 'Obtiene todas las cuentas de los usuarios empleados' })
    async findAll(@Res() res) {
        let usuarios = await this.usuarioService.getUsuarios();
        return res.status(HttpStatus.OK).json({
            usuarios
        })
    }

    @Get('/:usuarioId')
    @ApiOperation({ summary: 'Obtiene un usuario empleado según su ID' })
    async findUsuarioById(@Res() res, @Param('usuarioId') usuarioId) {
        let usuario = await this.usuarioService.getUsuarioById(usuarioId);
        if (!usuario)
            throw new NotFoundException('Usuario does not exists');
        else
            return res.status(HttpStatus.OK).json({
                usuario
            });
    }

    @Post()
    @ApiOperation({ summary: 'Guarda la nueva cuenta del usuario empleado' })
    @ApiResponse({ status: 200, description: 'Usuario successfully created.' })
    async saveUsuario(@Res() res, @Body() createUsuarioDTO: CreateUsuarioDTO) {
        let usuario = await this.usuarioService.createUsuario(createUsuarioDTO);
        res.status(HttpStatus.OK).json({
            message: 'Usuario successfully created',
            usuario: usuario
        });
    }
}
